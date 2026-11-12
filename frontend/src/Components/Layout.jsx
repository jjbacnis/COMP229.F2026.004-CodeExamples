import { Link } from 'react-router-dom';
import image_logo from '../assets/image_logo.png'
export default function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <nav className="navbar">
                <img src={image_logo} alt="Logo" className='logo'/>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/test">Test</Link>
            </nav>
            <br />
            <hr />
        </>
    );
}
