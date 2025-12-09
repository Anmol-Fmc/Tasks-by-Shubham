import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getCourseById } from '../utils/mockApi'
import '../styles/course.css'


export default function CourseDetail() {
const { courseId } = useParams()
const [course, setCourse] = useState(null)
const navigate = useNavigate()


useEffect(() => {
let mounted = true
async function fetchCourse() {
try {
const c = await getCourseById(courseId)
if (!c) {
if (mounted) navigate('/courses')
return
}
if (mounted) setCourse(c)
} catch (err) {
console.error('Error loading course:', err)
if (mounted) navigate('/courses')
}
}
fetchCourse()
return () => { mounted = false }
}, [courseId, navigate])


if (!course) return <p>Loading...</p>


return (
<div className='course-detail'>
<h2>{course.title}</h2>
<p>{course.description}</p>


<h3>Lessons</h3>
<ul className='lessons'>
{course.lessons.map(l => (
<li key={l.id}>
{/* use absolute path to avoid relative routing issues */}
<Link to={`/courses/${course.id}/lessons/${l.id}`}>{l.title}</Link>
</li>
))}
</ul>
</div>
)
}