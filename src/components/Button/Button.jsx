import './Button.css'
import  React from 'react'


export const Button = React.memo(({children, onClick}) => {
    return (
        <button onClick={onClick} className={'button accent'}>{children}</button>
    );
});

Button.displayName = 'Button';