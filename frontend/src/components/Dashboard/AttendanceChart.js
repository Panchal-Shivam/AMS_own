import React, { useState, useEffect } from 'react';
import './AttendanceChart.css';

const AttendanceChart = () => {
  const [students, setStudents] = useState([]);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  // Sample student data (to be replaced with data fetched from the backend)
  useEffect(() => {
    const fetchStudents = async () => {
      // Replace this with actual data fetching logic
      const studentData = [
        { id: 1, name: 'Aarav Patel', enrollment: '12345', imgSrc: 'student.jpg' },
        { id: 2, name: 'Aanya Sharma', enrollment: '54321', imgSrc: 'student.jpg' },
        { id: 3, name: 'Advait Verma', enrollment: '67890', imgSrc: 'student.jpg' },
        { id: 4, name: 'Anika Gupta', enrollment: '24680', imgSrc: 'student.jpg' },
        { id: 5, name: 'Arjun Kumar', enrollment: '13579', imgSrc: 'student.jpg' },
        { id: 6, name: 'Diya Singh', enrollment: '11111', imgSrc: 'student.jpg' },
        { id: 7, name: 'Ishaan Mishra', enrollment: '22222', imgSrc: 'student.jpg' },
        { id: 8, name: 'Neha Chopra', enrollment: '33333', imgSrc: 'student.jpg' },
        { id: 9, name: 'Rohan Khanna', enrollment: '44444', imgSrc: 'student.jpg' },
        { id: 10, name: 'Sanya Dubey', enrollment: '55555', imgSrc: 'student.jpg' }
      ];
      setStudents(studentData);
    };

    fetchStudents();
  }, []);

  const handleBoxClick = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, status: student.status === 'present' ? 'absent' : 'present' }
          : student
      )
    );
  };

  const handleCalculate = () => {
    const presentCount = students.filter((student) => student.status === 'present').length;
    const absentCount = students.length - presentCount;
    setPresentCount(presentCount);
    setAbsentCount(absentCount);
  };

  return (
    <div>
      <div className="container">
        {students.map((student) => (
          <div
            key={student.id}
            className={`box ${student.status}`}
            onClick={() => handleBoxClick(student.id)}
            style={{ backgroundColor: student.status === 'present' ? 'green' : student.status === 'absent' ? 'red' : '#f0f0f0' }}
          >
            <div className="student-number">{student.id}</div>
            <div className="student-info">
              <img src={student.imgSrc} alt={student.name} />
              <p className="student-enrollment">Enrollment: {student.enrollment}</p>
              <p className="student-name">Name: {student.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="counts">
        <div id="presentCount">Present: {presentCount}</div>
        <div id="absentCount">Absent: {absentCount}</div>
        <button id="calculateButton" onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  );
};

export default AttendanceChart;
