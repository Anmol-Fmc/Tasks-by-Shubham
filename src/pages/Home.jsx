import { Link } from "react-router-dom";
import '../styles/home.css'

export default function Home(){
    return(
        <div className="home">
            <h1>Welcome to CourseHub</h1>
            <p className="tagline">Learn web development,step by step</p>
            <Link className="btn" to='/courses'>Browse Courses</Link>
        </div>
    )
}