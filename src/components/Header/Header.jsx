import {SelectUser} from "../SelectUser/SelectUser.jsx";
import {useState} from "react";
import {Button} from "../Button/Button.jsx";
import Logo from "../Logo/Logo.jsx";

const logos = ['/logo.svg', './vite.svg']

export const Header = () => {
    const [logoIndex, setLogoIndex] = useState(0)
    const toggleLogo = () => {
        setLogoIndex(prev => Number(!prev))
    }
    return (
        <>
            <Logo image={logos[logoIndex]}/>
            <SelectUser/>
            <Button onClick={toggleLogo}>Change logo</Button>
        </>
    );
};
