import React from "react";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";
import TestimonialCard from "../components/TestimonialCard";
import courses from "../data/courses";
import testimonials from "../data/testimonials";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-white text-2xl my-4">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((c, i) => <CourseCard key={i} course={c} />)}
      </div>

      <h2 className="text-white text-2xl my-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
      </div>

      <div className="text-center my-6">
        <button className="bg-red-600 text-white px-6 py-3 text-lg rounded">Explore All Courses</button>
      </div>
    </Layout>
  );
}
