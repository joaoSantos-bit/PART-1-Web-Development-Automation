import { Link } from "react-router-dom";
import '../style/layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link className="nav-list-item-link" to='/register'>Register server</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link className="nav-list-item-link" to='/check'>Check servers</Link>
                    </li>
                </ul>
            </nav>
            { children }
        </>
    )
};

export default Layout;