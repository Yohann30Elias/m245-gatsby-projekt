import React from "react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <img
        src={testimonial.avatar}
        alt="Avatar"
        style={{ borderRadius: "50%", width: 64, height: 64 }}
      />
      <p><em>"{testimonial.quote}"</em></p>
      <p>- {testimonial.name}</p>
    </div>
  );
}
