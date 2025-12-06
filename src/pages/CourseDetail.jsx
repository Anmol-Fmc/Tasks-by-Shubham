import React,{useEffect, useState} from "react";
import {useParams , Link, useNavigate} from 'react-router-dom';
import { getCourseById } from "../utils/mockApi";
import '../styles/course.css'

export default function CourseDetail(){
    const { courseId } = useParams();
    const [course,setCourses] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getCourseById(courseId).then(c => {
            if(!c) return navigate('/courses')
                setCourses(c)
        })
    },[courseId,navigate])
    if(!course) return <p>Loading ...</p>
    return(
        <div className="course-detail">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <h3>Lessons</h3>
            <ul className="lessons ">
                {course.lessons.map(l =>(
                    <li key={l.id}>
                        <Link to={'lessons/${l.id}'}>{l.title}</Link>
                        
                    </li>
                ))}

            </ul>
        </div>
    )
    
}