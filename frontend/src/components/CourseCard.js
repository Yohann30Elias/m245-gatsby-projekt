import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="card">
      <img src={course.image} alt={course.title} width="100%" />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button>Learn More</button>
    </div>
  );
}
