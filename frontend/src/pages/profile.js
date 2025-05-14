import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/user")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <Layout><p>Lade Profil...</p></Layout>;

  return (
    <Layout>
      <h2>Profil</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Abgeschlossene Kurse:</strong> {user.completedCourses}</p>
    </Layout>
  );
}
