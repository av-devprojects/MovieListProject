import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="nav-title">ALL THE MOVIES</Link>
        </div>

        <div className="navbar-links">
            <NavLink to="/worthit"
            className={({isActive }) => isActive ? "nav-link active" : "nav-link"}>worth it &#128077;</NavLink>
            <NavLink to="/yettosee" className={({isActive }) => isActive ? "nav-link active" : "nav-link"}>yet to see &#128064;</NavLink>
            <NavLink to="/timewasted" className={({isActive }) => isActive ? "nav-link active" : "nav-link"}>time wasted &#128169;</NavLink>
        </div>
    </nav>
}

export default NavBar;