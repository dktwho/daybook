import s from "../Header/Header.module.css";
import {memo} from 'react'
export const Logo = ({image}) => {
    return (
        <img className={s.logo} src={image} alt="logo"/>
    );
};

export default memo(Logo);