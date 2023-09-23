import s from './SelectUser.module.css'
import {useContext} from "react";
import {UserContext} from "../../context/user.context.js";

export const SelectUser = () => {
    const {userId, setUserId} = useContext(UserContext)

    const changeUser = (e) => {
        setUserId(Number(e.target.value))
    }
    return (
        <>
            <img className={s.logo} src="/logo.svg" alt="logo"/>
            <select name="user" id="user" value={userId} onChange={changeUser}>
                <option value="1">Bob</option>
                <option value="2">Bill</option>
            </select>
        </>
    );
};
