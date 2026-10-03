import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text mb-1"><strong>Code:</strong> {course.code}</p>
        <p className="card-text mb-0"><strong>Credits:</strong> {course.credits}</p>
      </div>
    </div>
  );
}

export default CourseCard;
