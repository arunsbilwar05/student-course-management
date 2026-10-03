import React, { useContext } from 'react';
import StudentForm from '../components/StudentForm';
import { StudentContext } from '../context/StudentContext';

function AddStudentPage() {
  const { addStudent } = useContext(StudentContext);

  return (
    <div className="container mt-4">
      <StudentForm onSubmit={addStudent} />
    </div>
  );
}

export default AddStudentPage;
