import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

function HomePage() {
  const { students, courses } = useContext(StudentContext);

  return (
    <div className="container mt-4">
      <h2 className="page-title">Student Course Management Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card bg-primary text-white h-100">
            <div className="card-body">
              <h4>Total Students</h4>
              <h2>{students.length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-success text-white h-100">
            <div className="card-body">
              <h4>Total Courses</h4>
              <h2>{courses.length}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
