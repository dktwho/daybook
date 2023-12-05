import s from './SelectUser.module.css'
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

export const SelectUser = () => {
    const {userId, setUserId} = useContext(UserContext)

    const changeUser = (e) => {
        setUserId(Number(e.target.value))
    }
    return (
        <>
            <img className={s.logo} src="/logo.svg" alt="logo"/>
            <select className={s['select']} name="user" id="user" value={userId} onChange={changeUser}>
                <option className={s['option']} value="1">Bob</option>
                <option className={s['option']} value="2">Bill</option>
            </select>
        </>
    );
};
