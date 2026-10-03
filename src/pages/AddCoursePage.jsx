import React, { useContext } from 'react';
import CourseForm from '../components/CourseForm';
import { StudentContext } from '../context/StudentContext';

function AddCoursePage() {
  const { addCourse } = useContext(StudentContext);

  return (
    <div className="container mt-4">
      <CourseForm onSubmit={addCourse} />
    </div>
  );
}

export default AddCoursePage;
