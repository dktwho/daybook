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
            dispatchForm({type: 'RESET'})
        }
    }, [isFormReadyToSubmit])

    const addJournalItem = (e) => {
        e.preventDefault()
        dispatchForm({type: 'SUBMIT'})
    }

    const onChange = (e) => {
        dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}})
    }

    return (
        <form className={s.journalForm} onSubmit={addJournalItem}>
            <div>
                <input type="text" name={'title'} value={values.title} onChange={onChange}
                       className={cn(s['input-title'], {[s['invalid']]: !isValid.title})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="date" className={s['form-label']}>
                    <img src="/Frame1.svg" alt="icon-calendar"/>
                    <span>Date</span></label>
                <input type="date" id={'date'} name={'date'} value={values.date} onChange={onChange}
                       className={cn(s['input'], {[s['invalid']]: !isValid.date})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="tag" className={s['form-label']}>
                    <img src="/Frame2.svg" alt="icon-tag"/>
                    <span>Tag</span></label>
                <input name={'tag'} id={'tag'} type="text" value={values.tag} onChange={onChange}
                       className={cn(s['input'], {[s['invalid']]: !isValid.text})}/>
            </div>

            <textarea name="text" id="" cols="30" rows="10" value={values.text} onChange={onChange}
                      className={cn(s['input'], {[s['invalid']]: !isValid.text})}/>
            <Button text={'Submit'}/>
        </form>
    );
};
