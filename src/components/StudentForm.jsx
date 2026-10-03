import React, { useState } from 'react';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    year: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.course || !formData.year) return;
    onSubmit(formData);
    setFormData({ name: '', course: '', year: '' });
  };

  return (
    <form className="card p-4" onSubmit={handleSubmit}>
      <h3 className="mb-3">Add Student</h3>
      <div className="mb-3">
        <label className="form-label">Student Name</label>
        <input
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Course</label>
        <input
          className="form-control"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter course name"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Year</label>
        <input
          className="form-control"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Enter year"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Save Student</button>
    </form>
  );
}

export default StudentForm;
