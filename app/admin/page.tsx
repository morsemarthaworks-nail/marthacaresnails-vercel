"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

const OWNER_EMAIL = "morse.marthaworks@gmail.com";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isOwner = user?.email?.toLowerCase() === OWNER_EMAIL.toLowerCase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      alert("Login failed. Check your email and password.");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <main style={{ fontFamily: "Arial", padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
        <h1>Owner Admin Login</h1>

        <form onSubmit={login} style={{ display: "grid", gap: "12px" }}>
          <input
            type="email"
            placeholder="Owner Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Owner Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <br />
        <Link href="/">Back To Client App</Link>
      </main>
    );
  }

  if (!isOwner) {
    return (
      <main style={{ fontFamily: "Arial", padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
        <h1>Access Denied</h1>
        <p>This email is not approved for the Martha Cares Nails admin page.</p>
        <button onClick={logout}>Sign Out</button>
      </main>
    );
  }

  return (
    <main style={{ fontFamily: "Arial", padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Martha Cares Nails Admin Dashboard</h1>
      <p>Logged in as: {user.email}</p>

      <button onClick={logout}>Sign Out</button>

      <hr />

      <h2>Bookings</h2>
      <p>Client bookings will show here once Firebase booking display is connected.</p>

      <hr />

      <h2>Admin Tools</h2>
      <button>Send Fill Reminder</button>
      <br /><br />
      <button>Send Holiday Reminder</button>
      <br /><br />
      <button>Approve Booking</button>
      <br /><br />
      <button>Decline Booking</button>

      <hr />

      <Link href="/">Back To Client App</Link>
    </main>
  );
}
