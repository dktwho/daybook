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
        } else {
            setFormValidState(state => ({...state, title: true}))
        }
        if (!formProps.text?.trim().length) {
            setFormValidState(state => ({...state, text: false}))
            isFormValid = false
        } else {
            setFormValidState(state => ({...state, text: true}))
        }
        if (!formProps.date) {
            setFormValidState(state => ({...state, date: false}))
            isFormValid = false
        } else {
            setFormValidState(state => ({...state, date: true}))
        }
        if (!isFormValid) {
            return
        }
        addNewPost(formProps)
    }

    return (
        <form className={'journal-form'} onSubmit={addJournalItem}>
            <input type="text" name={'title'} style={{border: formValidState.title ? undefined : '1px solid red'}}/>
            <input type="date" name={'date'} style={{border: formValidState.date ? undefined : '1px solid red'}}/>
            <input name={'tag'} type="text"/>
            <textarea name="text" id="" cols="30" rows="10"
                      style={{border: formValidState.text ? undefined : '1px solid red'}}></textarea>
            <Button text={'Submit'}/>
        </form>
    );
};
