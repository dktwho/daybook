import './Button.css'
import {useState} from "react";

export const Button = () => {
    const [text, setText] = useState('Save')
    console.log('render')

    const clicked = () => {
        setText('Close')
    }
    return (
        <button onClick={clicked} className={'button accent'}>{text}</button>
    );
};

