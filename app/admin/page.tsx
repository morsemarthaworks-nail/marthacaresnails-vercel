"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [code, setCode] = useState("");

  const login = () => {
    if (code === "Book1994") {
      setLoggedIn(true);
    } else {
      alert("Wrong code");
    }
  };

  if (!loggedIn) {
    return (
      <main style={{fontFamily:"Arial",padding:"20px",maxWidth:"700px",margin:"0 auto"}}>
        <h1>Owner Admin Login</h1>

        <input
          type="password"
          placeholder="Enter Admin Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{padding:"10px",width:"100%",marginBottom:"10px"}}
        />

        <button onClick={login}>Login</button>

        <br /><br />

        <Link href="/">Back To Client App</Link>
      </main>
    );
  }

  return (
    <main style={{fontFamily:"Arial",padding:"20px",maxWidth:"900px",margin:"0 auto"}}>
      <h1>Martha Cares Nails Admin Dashboard</h1>

      <p>Welcome Martha</p>

      <hr />

      <h2>Bookings</h2>
      <p>Client bookings will appear here after Firebase is connected.</p>

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
