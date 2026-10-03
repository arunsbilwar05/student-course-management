import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import CoursesPage from './pages/CoursesPage';
import AddStudentPage from './pages/AddStudentPage';
import AddCoursePage from './pages/AddCoursePage';
import { StudentProvider } from './context/StudentContext';

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/add-student" element={<AddStudentPage />} />
          <Route path="/add-course" element={<AddCoursePage />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
