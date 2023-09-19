import s from './Input.module.css'
import cn from "classnames";

export const Input = ({classNames, isValid, appearance, ...props}) => {
    return (
        <input {...props} className={cn(classNames, s['input'], {
            [s['invalid']]: !isValid,
            [s['input-title']]: appearance === 'title'
        })}/>

    );
};
