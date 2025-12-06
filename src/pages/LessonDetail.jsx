import react,{useEffect,useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import { getLesson,getCourseById } from '../utils/mockApi';
import '../styles/lesson.css';

export default function LessonDetail(){
    const {courseId, lessonId} = useParams();
    const [lesson, setLesson]= useState(null)
    const [course ,setCourse] = useState(null)
    const navigate = useNavigate()

    useEffect(()=> {
        getCourseById(courseId).then(c =>{
            if(!c) return navigate('/courses')
            setCourse(c)
        })
        getLesson(courseId,lessonId).then(l => {
            if(!l) return navigate ('/courses/${courseId}')
            setLesson(l)
        })
    
}, [courseId,lessonId,navigate])
    if(!lesson || !course) return <p>Loading Lesson...</p>
    return(
        <div className='lesson-detail'>
            <h2>{lesson.title}</h2>
            <p className='course-ref'>Course:{course.title}</p>
            <article className='lesson-content'>
                {lesson.content}
            </article>
        </div>
    )

}
