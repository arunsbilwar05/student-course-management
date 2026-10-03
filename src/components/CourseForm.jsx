import React, { useState } from 'react';

function CourseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    credits: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.code || !formData.name || !formData.credits) return;
    onSubmit({
      ...formData,
      credits: Number(formData.credits)
    });
    setFormData({ code: '', name: '', credits: '' });
  };

  return (
    <form className="card p-4" onSubmit={handleSubmit}>
      <h3 className="mb-3">Add Course</h3>
      <div className="mb-3">
        <label className="form-label">Course Code</label>
        <input
          className="form-control"
          name="code"
          value={formData.code}
          onChange={handleChange}
          placeholder="e.g. CS101"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Course Name</label>
        <input
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter course name"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Credits</label>
        <input
          type="number"
          className="form-control"
          name="credits"
          value={formData.credits}
          onChange={handleChange}
          placeholder="Enter credit hours"
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Save Course</button>
    </form>
  );
}

export default CourseForm;
