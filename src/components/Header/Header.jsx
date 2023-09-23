import s from './Header.module.css'
import {SelectUser} from "../SelectUser/SelectUser.jsx";

export const Header = () => {
    return (
        <>
            <img className={s.logo} src="/logo.svg" alt="logo"/>
            <SelectUser />
        </>
    );
};
