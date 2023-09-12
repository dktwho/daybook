import {useState} from "react";
import {Button} from "../Button/Button.jsx";

export const JournalForm = () => {
    const [inputData, setInputData] = useState('')
    const inputChange = (e) => {
        setInputData(e.currentTarget.value)
    }

    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        console.log(formProps)
    }

    return (
        <form className={'journal-form'} onSubmit={addJournalItem}>
            <input type="text" name={'title'}/>
            <input type="date" name={'date'}/>
            <input value={inputData} name={'tag'} type="text" onChange={inputChange}/>
            <textarea name="post" id="" cols="30" rows="10"></textarea>
            <Button text={'Submit'} onClick={() => console.log('clicked')}/>
        </form>
    );
};
