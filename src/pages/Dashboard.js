import React, { useState, useEffect } from 'react';
import '../style/dashboard.css';
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";

function Dashboard() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [viewedCourse, setViewedCourse] = useState(null);
  const [editingCourseIndex, setEditingCourseIndex] = useState(null);

  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [instructor, setInstructor] = useState('');
  const [courseImageUrl, setCourseImageUrl] = useState('');

  const [courses, setCourses] = useState([
    {
      title: 'React for Beginners',
      duration: '3 months',
      startDate: '2024-09-01',
      endDate: '2024-12-01',
      instructor: 'John Doe',
    },
    {
      title: 'Advanced JavaScript',
      duration: '2 months',
      startDate: '2024-10-01',
      endDate: '2024-12-01',
      instructor: 'Jane Doe',
    },
    {
      title: 'UI/UX Design Fundamentals',
      duration: '1.5 months',
      startDate: '2024-08-15',
      endDate: '2024-10-01',
      instructor: 'Alice Smith',
    },
    {
      title: 'Fullstack Development',
      duration: '4 months',
      startDate: '2024-07-01',
      endDate: '2024-11-01',
      instructor: 'Bob Johnson',
    },
    {
      title: 'Mobile App Development',
      duration: '3 months',
      startDate: '2024-09-15',
      endDate: '2024-12-15',
      instructor: 'Chris Brown',
    },
  ]);

  // Effect to manage body background color
  useEffect(() => {
    if (isViewVisible) {
      document.body.classList.add('view-active');
    } else {
      document.body.classList.remove('view-active');
    }

    // Clean up effect
    return () => {
      document.body.classList.remove('view-active');
    };
  }, [isViewVisible]);

  const handleAddCourseClick = () => {
    setIsFormVisible(true);
    setEditingCourseIndex(null);
    clearForm();
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      title: courseName,
      duration,
      startDate,
      endDate,
      instructor,
      imageUrl: courseImageUrl,
    };

    if (editingCourseIndex !== null) {
      const updatedCourses = courses.map((course, i) =>
        i === editingCourseIndex ? newCourse : course
      );
      setCourses(updatedCourses);
    } else {
      setCourses([...courses, newCourse]);
    }

    setIsFormVisible(false);
    clearForm();
  };

  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  const handleView = (index) => {
    setViewedCourse(courses[index]);
    setIsViewVisible(true);
  };

  const handleEdit = (index) => {
    setEditingCourseIndex(index);
    const course = courses[index];
    setCourseName(course.title);
    setDuration(course.duration);
    setStartDate(course.startDate);
    setEndDate(course.endDate);
    setInstructor(course.instructor);
    setCourseImageUrl(course.imageUrl);
    setIsFormVisible(true);
  };

  const clearForm = () => {
    setCourseName('');
    setDuration('');
    setStartDate('');
    setEndDate('');
    setInstructor('');
    setCourseImageUrl('');
  };

  return (
    <div>
      <div className="dashboard">
        <input type="text" placeholder='Bu yerda qidiring' />
        <CiSearch className="search-icon" />
        <div className="notification">
          <RiNotification2Line />
          <div className="xabar-soni">15</div>
        </div>
        <div className="message">
          <FaRegMessage />
          <div className="xabar-soni">5</div>
        </div>

        <div className="line"></div>
        <div className="profil">
          <h4 className="name">Hello, Samantha</h4>
          <div className="profilx-img"></div>
        </div>

        <h4 className="teacher">Teacher</h4>
        <div className="dashboard-container">
          <div className="item-1">
            <div className="img"></div>
            <h1 className='number-static'>15</h1>
            <p className="title">O`quvchilar soni</p>
          </div>

          <div className="item-2">
            <div className="img"></div>
            <h1 className='number-static'>10</h1>
            <p className="title">kurslar  soni</p>
          </div>

          <div className="item-3">
            <div className="img"></div>
            <h1 className='number-static'>15</h1>
            <p className="title">Ro`yxatdan o`tmagan</p>
          </div>
        </div>

        <div className="cards-container">
          {courses.map((course, i) => (
            <div key={i} className={`card ${viewedCourse === course ? 'scaled' : ''}`}>
              <div className="card-image" />
              <div className="card-content">
                <h3>{course.title}</h3>
                <p>Duration: {course.duration}</p>
                <p>Start Date: {course.startDate}</p>
                <p>End Date: {course.endDate}</p>
                <p>Instructor: {course.instructor}</p>
                <div className="card-buttons">
                  <button className="view-btn" onClick={() => handleView(i)}>VIEW</button>
                  <button className="edit-btn" onClick={() => handleEdit(i)}>EDIT</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(i)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="add-new-course" onClick={handleAddCourseClick}>
            <div className="card-content">
              <div className="plus-icon">+</div>
              <p>Add New Course</p>
            </div>
          </div>
        </div>
      </div>

      {isFormVisible && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              Course Name:
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </label>
            <label>
              Duration:
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </label>
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </label>
            <label>
              Instructor:
              <input
                type="text"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                required
              />
            </label>
            <label>
              Course Image URL:
              <input
                type="url"
                value={courseImageUrl}
                onChange={(e) => setCourseImageUrl(e.target.value)}
                required
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCloseForm}>Cancel</button>
          </form>
        </div>
      )}

      {isViewVisible && viewedCourse && (
        <div className="view-container">
          <h2>{viewedCourse.title}</h2>
          <p>Duration: {viewedCourse.duration}</p>
          <p>Start Date: {viewedCourse.startDate}</p>
          <p>End Date: {viewedCourse.endDate}</p>
          <p>Instructor: {viewedCourse.instructor}</p>
          <button onClick={() => setIsViewVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
