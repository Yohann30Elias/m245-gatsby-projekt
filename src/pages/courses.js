import React from "react";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function CoursesPage() {
  return (
    <Layout>
      <h2>Alle Kurse</h2>
      <div className="grid grid-3">
        {courses.map((c, i) => (
          <CourseCard key={i} course={c} />
        ))}
      </div>
    </Layout>
  );
}
