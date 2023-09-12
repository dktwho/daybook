import {Button} from "../Button/Button.jsx";
import {useState} from "react";
import s from './JournalForm.module.css'
import cn from 'classnames'

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
        <form className={s.journalForm} onSubmit={addJournalItem}>
            <div>
                <input type="text" name={'title'}
                       className={cn(s['input-title'], {[s['invalid']]: !formValidState.title})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="date" className={s['form-label']}>
                    <img src="/Frame1.svg" alt="icon-calendar"/>
                    <span>Date</span></label>
                <input type="date" id={'date'} name={'date'}
                       className={cn(s['input'], {[s['invalid']]: !formValidState.date})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="tag" className={s['form-label']}>
                    <img src="/Frame2.svg" alt="icon-tag"/>
                    <span>Tag</span></label>
                <input name={'tag'} id={'tag'} type="text"
                       className={cn(s['input'], {[s['invalid']]: !formValidState.text})}/>
            </div>

            <textarea name="text" id="" cols="30" rows="10"
                      className={cn(s['input'], {[s['invalid']]: !formValidState.text})}/>
            <Button text={'Submit'}/>
        </form>
    );
};
