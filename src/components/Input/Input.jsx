import s from './Input.module.css'
import cn from "classnames";
import {forwardRef} from "react";

export const Input = forwardRef(function Input({classNames, isValid = true, appearance, ...props}, ref) {
    return (
        <input {...props} ref={ref} className={cn(classNames, s['input'], {
            [s['invalid']]: !isValid,
            [s['input-title']]: appearance === 'title'
        })}/>

    );
})
