import {Button} from "../Button/Button.jsx";
import {useEffect, useReducer} from "react";
import s from './JournalForm.module.css'
import cn from 'classnames'
import {formReducer, INITIAL_STATE} from "./JournalForm.state.js";


export const JournalForm = ({addNewPost}) => {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const {isValid, isFormReadyToSubmit, values} = formState

    useEffect(() => {
        let timerId;
        if (!isValid.date || !formState.isValid.title || formState.isValid.tag) {
            timerId = setTimeout(() => {
                dispatchForm({type: 'RESET_VALIDITY'})
            }, 1000)
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [isValid])

    useEffect(() => {
        if (isFormReadyToSubmit) {
            addNewPost(values)
        }
    }, [isFormReadyToSubmit])

    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        dispatchForm({type: 'SUBMIT', payload: formProps})
    }

    return (
        <form className={s.journalForm} onSubmit={addJournalItem}>
            <div>
                <input type="text" name={'title'}
                       className={cn(s['input-title'], {[s['invalid']]: !isValid.title})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="date" className={s['form-label']}>
                    <img src="/Frame1.svg" alt="icon-calendar"/>
                    <span>Date</span></label>
                <input type="date" id={'date'} name={'date'}
                       className={cn(s['input'], {[s['invalid']]: !isValid.date})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="tag" className={s['form-label']}>
                    <img src="/Frame2.svg" alt="icon-tag"/>
                    <span>Tag</span></label>
                <input name={'tag'} id={'tag'} type="text"
                       className={cn(s['input'], {[s['invalid']]: !isValid.text})}/>
            </div>

            <textarea name="text" id="" cols="30" rows="10"
                      className={cn(s['input'], {[s['invalid']]: !isValid.text})}/>
            <Button text={'Submit'}/>
        </form>
    );
};
