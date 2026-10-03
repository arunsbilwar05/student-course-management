import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import CourseCard from '../components/CourseCard';

function CoursesPage() {
  const { courses } = useContext(StudentContext);

  return (
    <div className="container mt-4">
      <h2 className="page-title">Courses</h2>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CoursesPage;
