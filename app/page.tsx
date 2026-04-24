"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{fontFamily:"Arial",padding:"20px",maxWidth:"900px",margin:"0 auto"}}>
      <h1>Martha Cares Nails Experience</h1>
      <p>A Luxury Spa Experience Official Booking Site</p>

      <hr />

      <h2>Book Appointment</h2>

      <form style={{display:"grid",gap:"12px"}}>

        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />
        <input placeholder="Email Address" />
        <input type="date" />
        <input type="time" />

        <select>
          <option>Short Full Set - $85</option>
          <option>Medium Full Set - $100</option>
          <option>Long Full Set - $120</option>
          <option>Fill In - $70</option>
          <option>Freestyle Set - $140</option>
          <option>Travel Appointment</option>
        </select>

        <input placeholder="Paste Photo Inspiration Link" />

        <textarea placeholder="Comments / Nail Details"></textarea>

        <label>
          <input type="checkbox" /> I agree to policies and procedures
        </label>

        <button type="submit">Submit Booking Request</button>
      </form>

      <hr />

      <h2>Payments</h2>
      <p>Booking Fee: $15</p>
      <p>Travel Fee: $25 + mileage</p>
      <p>Cash App: $Marthacaresnailz</p>
      <p>Zelle: 202-848-7249</p>

      <hr />

      <h2>Available Days</h2>
      <p>Monday - Friday Available</p>
      <p>Saturday Limited</p>
      <p>Sunday Closed</p>

      <hr />

      <h2>Photo Gallery</h2>
      <p>Add your nail photos later here.</p>

      <hr />

      <Link href="/admin">Owner Admin Login</Link>
    </main>
  );
}
