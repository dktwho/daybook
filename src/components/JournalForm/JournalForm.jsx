import {Button} from "../Button/Button.jsx";
import {useState} from "react";

export const JournalForm = ({addNewPost}) => {
    const [formValidState, setFormValidState] = useState({
        id: true,
        title: true,
        text: true,
        date: true,
        tag: true
    })

    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        let isFormValid = true
        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({...state, title: false}))
            isFormValid = false
        }
        if (!formProps.text?.trim().length) {
            setFormValidState(state => ({...state, text: false}))
            isFormValid = false
        }
        if (!formProps.date) {
            setFormValidState(state => ({...state, date: false}))
            isFormValid = false
        }
        if (!isFormValid) {
            return
        }
        addNewPost(formProps)
    }


    return (
        <form className={'journal-form'} onSubmit={addJournalItem}>
            <input type="text" name={'title'}/>
            <input type="date" name={'date'}/>
            <input name={'tag'} type="text"/>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <Button text={'Submit'}/>
        </form>
    );
};
