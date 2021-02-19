import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogues">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="">Settings</NavLink>
            </div>
        </nav>
    );
};
export default Navbar