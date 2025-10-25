import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
    return (
        <header className="header" id="header">
            <nav className="nav">
                <Link to="/" className="nav_logo">
                    React GI Week 3
                </Link>

                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <Link to="/easy" className="nav_link">
                                Easy
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/medium" className="nav_link">
                                Medium
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/hard" className="nav_link">
                                Hard
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link
                                to="https://github.com/khangvu0/react-week-3"
                                className="nav_link"
                                target="_blank">
                                GitHub
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
