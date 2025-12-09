import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCourses } from '../utils/mockApi'
import '../styles/courses.css'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses().then(setCourses)
  }, [])

  return (
    <div className='courses-page'>
      <h2>Courses</h2>
      <ul className='course-list'>
        {courses.map(c => (
          <li key={c.id} className='course-card'>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            {/* absolute path ensures routing goes to the expected route */}
            <Link to={`/courses/${c.id}`} className='small-btn'>Open Course</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}