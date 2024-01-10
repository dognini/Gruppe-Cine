import "../styles/components/navbar.css";

import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2>
                <Link to='/'> <BiCameraMovie /> Gruppe Cine </Link>
            </h2>

            <form>
                <input type="text" placeholder="Busque um filme" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default NavBar