import './Button.css'

export const Button = () => {
    const clicked = () => {
        console.log('click')
    }
    return (
        <button onClick={clicked} className={'button accent'}>Save</button>
    );
};

