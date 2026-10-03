import React from 'react';

function StudentCard({ student }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{student.name}</h5>
        <p className="card-text mb-1"><strong>Course:</strong> {student.course}</p>
        <p className="card-text mb-0"><strong>Year:</strong> {student.year}</p>
      </div>
    </div>
  );
}

export default StudentCard;
