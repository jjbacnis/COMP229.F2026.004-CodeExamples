import { Link } from 'react-router-dom';
import JB_logo from '../assets/JB_logo.png';

export default function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <nav>
                <image src={JB_logo} alt="Logo" />
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
            </nav>
            <br />
            <hr />
        </>
    );
}
