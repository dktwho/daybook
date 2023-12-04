import {SelectUser} from "../SelectUser/SelectUser.jsx";
import {useState} from "react";
import s from './Header.module.css'
import {Button} from "../Button/Button.jsx";

const logos = ['/logo.svg', './vite.svg']

export const Header = () => {
    const [logoIndex, setLogoIndex] = useState(0)
    const toggleLogo = () => {
        setLogoIndex(prev => Number(!prev))
    }
    return (
        <>
            <img className={s.logo} src={logos[logoIndex]} alt="logo"/>
            <SelectUser/>
            <Button onClick={toggleLogo}>Change logo</Button>
        </>
    );
};
