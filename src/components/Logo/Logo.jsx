import s from "../Header/Header.module.css";

export const Logo = ({image}) => {
    return (
        <img className={s.logo} src={image} alt="logo"/>
    );
};

export default Logo;