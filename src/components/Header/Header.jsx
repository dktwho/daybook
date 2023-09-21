import s from './Header.module.css'
import {SelectUser} from "../SelectUser/SelectUser.jsx";

export const Header = ({changedUser}) => {
    const changeUser = (e) => {
        changedUser(e.target.value)
    }
    return (
        <>
            <img className={s.logo} src="/logo.svg" alt="logo"/>
            <SelectUser changeUSer={changeUser}/>
        </>
    );
};
