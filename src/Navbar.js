import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>Tour of Heroes</h1>
                <div className="links">
                    <Link to="/">Dashboard</Link>
                    <Link to="/hero-section">Heroes</Link>
                </div>
            </nav>
            <hr className="navline" />
        </div>
    );
}

export default Navbar;