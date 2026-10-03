import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentCard from '../components/StudentCard';

function StudentsPage() {
  const { students } = useContext(StudentContext);

  return (
    <div className="container mt-4">
      <h2 className="page-title">Students</h2>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentsPage;
