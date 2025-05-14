import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <div><strong>💻 CodeSchule</strong></div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/profile">Profil</Link>
      </div>
    </nav>
  );
}
