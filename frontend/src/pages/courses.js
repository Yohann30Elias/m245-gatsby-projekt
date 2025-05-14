import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <Layout>
      <h2>Alle Kurse</h2>
      <div className="grid grid-3">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </Layout>
  );
}
