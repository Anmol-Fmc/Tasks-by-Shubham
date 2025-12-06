import { courses } from "../data/courses";

export function getCourses(){
    //in real project we will fetch api from database but in this we are using predefine 
    // data from courses.jsx
    return Promise.resolve(courses);
}
export function getCourseById(id){
    return Promise.resolve(courses.find(c => c.id === id));
}
export function getLesson(courseId, lessonId) {
    const course = courses.find(c => c.id === courseId);
    if(!course) return Promise.resolve(null);
    return Promise.resolve(course.lessons.find(l => l.id === lessonId));
}