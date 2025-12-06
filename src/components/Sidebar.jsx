import { NavLink } from "react-router-dom";
import '../styles/layout.css'

export default function Sidebar(){
    return(
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><NavLink to='/' end>Home</NavLink></li>
                    <li><NavLink to ='/courses'>All courses</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
} 