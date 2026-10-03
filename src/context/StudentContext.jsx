import { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

const initialStudents = [
  { id: 1, name: 'Alice Johnson', course: 'React Fundamentals', year: '2nd Year' },
  { id: 2, name: 'Benjamin Lee', course: 'Database Systems', year: '3rd Year' },
  { id: 3, name: 'Catherine Smith', course: 'UI/UX Design', year: '1st Year' }
];

const initialCourses = [
  { id: 1, code: 'CS101', name: 'React Fundamentals', credits: 3 },
  { id: 2, code: 'CS202', name: 'Database Systems', credits: 4 },
  { id: 3, code: 'DS305', name: 'UI/UX Design', credits: 2 }
];

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents);
  const [courses, setCourses] = useState(initialCourses);

  useEffect(() => {
    console.log('Student and course data loaded.');
  }, []);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
  };

  const addCourse = (course) => {
    setCourses((prev) => [...prev, { ...course, id: Date.now() }]);
  };

  const value = { students, courses, addStudent, addCourse };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}
