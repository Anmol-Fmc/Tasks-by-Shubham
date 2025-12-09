import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getLesson, getCourseById } from '../utils/mockApi'
import '../styles/lesson.css'


export default function LessonDetail(){
const { courseId, lessonId } = useParams()
const [lesson, setLesson] = useState(null)
const [course, setCourse] = useState(null)
const navigate = useNavigate()


useEffect(() => {
let mounted = true


async function fetchData() {
try {
const c = await getCourseById(courseId)
if (!c) {
if (mounted) navigate('/courses')
return
}
const l = await getLesson(courseId, lessonId)
if (!l) {
if (mounted) navigate(`/courses/${courseId}`)
return
}
if (mounted) {
setCourse(c)
setLesson(l)
}
} catch (err) {
console.error('Error loading lesson:', err)
if (mounted) navigate('/courses')
}
}


fetchData()
return () => { mounted = false }
}, [courseId, lessonId, navigate])


if (!lesson || !course) return <p>Loading lesson...</p>


return (
<div className='lesson-detail'>
<h2>{lesson.title}</h2>
<p className='course-ref'>Course: {course.title}</p>
<article className='lesson-content'>
{lesson.content}
</article>
</div>
)
}