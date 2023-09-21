import s from './SelectUser.module.css'

export const SelectUser = ({ changedUser }) => {

    const changeUSer = (e) => {
        changedUser(e.target.value)
    }
    return (
        <>
            <img className={s.logo} src="/logo.svg" alt="logo"/>
            <select name="user" id="user" onChange={changeUSer}>
                <option value="1">Bob</option>
                <option value="2">Bill</option>
            </select>
        </>
    );
};
