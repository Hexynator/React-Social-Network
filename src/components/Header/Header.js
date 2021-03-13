import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

        <header className={s.header}>
            <img
                src="http://www.logo-designer.co/wp-content/uploads/2013/06/Qatar-Jet-Fuel-Company-logo-design-branding-Sandor-Szalay-525.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};
export default Header;
