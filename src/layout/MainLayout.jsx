import { Outlet } from "react-router-dom";
import Header from './Header'
import Sidebar from '../components/Sidebar'
import '../styles/layout.css'

export default function MainLayout(){
    return(
        <div className="app-layout">
            <Header/>
            <div className="main-area">
                <Sidebar/>
                <main className="content">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}