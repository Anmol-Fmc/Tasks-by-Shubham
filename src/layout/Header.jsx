import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="site-header">
            <div className="container">
                <Link to ='/' className="logo">CourseHub</Link>
                <nav>
                    <Link to ='/courses'>Course</Link>
                </nav> 
            </div>
        </header>
    )
}