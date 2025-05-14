import React from "react";
import Layout from "../components/Layout";

export default function ProfilePage() {
  return (
    <Layout>
      <h2>Mein Profil</h2>
      <p>👤 Name: Max Mustermann</p>
      <p>📧 E-Mail: max@example.com</p>
      <p>🎓 Bereits absolvierte Kurse: 2</p>
    </Layout>
  );
}
