import React, { useState } from "react";
import Layout from "../components/Layout";
import TestimonialCard from "../components/TestimonialCard";
import testimonials from "../data/testimonials";

export default function Home() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5002/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: feedback }),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
        setFeedback("");
      });
  };

  return (
    <Layout>
      <h2 className="text-white text-2xl my-4">Willkommen bei der CodeSchule</h2>
      <p>Hier lernst du Coden Schritt für Schritt – einfach & verständlich.</p>

      <h2 className="text-white text-2xl my-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>

      <h2 className="text-white text-2xl my-6">Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          placeholder="Dein Feedback..."
          style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 text-lg rounded"
        >
          Absenden
        </button>
        {submitted && <p style={{ color: "lightgreen", marginTop: "0.5rem" }}>Danke für dein Feedback!</p>}
      </form>

      <div className="text-center my-6">
        <a href="/courses">
          <button className="bg-red-600 text-white px-6 py-3 text-lg rounded">
            Alle Kurse ansehen
          </button>
        </a>
      </div>
    </Layout>
  );
}
