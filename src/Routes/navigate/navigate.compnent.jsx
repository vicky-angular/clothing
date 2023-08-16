import { Outlet, Link } from "react-router-dom";
import './navigate.scss';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
const Navigate = () => {
return (
    <>
    <div class="navigation">
    <Link className="logo-container" to="/">
    <CrownLogo className="logo"></CrownLogo>
    </Link>
    
    <div className="nav-links-container">
    <Link className="nav-link" to="/shope">Shope</Link>
    <Link className="nav-link">Cloth</Link>
    <Link className="nav-link" to="/signin">Sign-In</Link>
    </div>
    </div>
    <Outlet />
    </>
);
}

export {Navigate}