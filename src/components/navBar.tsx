import "../styles/components/navbar.css";

import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

interface NavBarProps {
    value: string
    submit: (event: React.FormEvent<HTMLFormElement>) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NavBar = ({ value, onChange, submit }: NavBarProps) => {
    return (
        <nav className="navbar">
            <h2>
                <Link to='/'> <BiCameraMovie /> Gruppe Cine </Link>
            </h2>

            <form onSubmit={submit}>
                <input type="text" placeholder="Pesquisar" value={value} onChange={onChange} />
                <button type="submit"> <BiSearchAlt2 /> </button>
            </form>
        </nav>
    )
}

export default NavBar