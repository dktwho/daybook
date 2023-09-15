import {Button} from "../Button/Button.jsx";
import {useEffect, useReducer, useRef} from "react";
import s from './JournalForm.module.css'
import cn from 'classnames'
import {formReducer, INITIAL_STATE} from "./JournalForm.state.js";


export const JournalForm = ({addNewPost}) => {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const {isValid, isFormReadyToSubmit, values} = formState
    const titleRef = useRef()
    const dateRef = useRef()
    const textRef = useRef()

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title: titleRef.current.focus()
                break;
            case !isValid.date: dateRef.current.focus()
                break;
            case !isValid.text: textRef.current.focus()
                break;
        }
    }

    useEffect(() => {
        let timerId;
        if (!isValid.date || !formState.isValid.title || formState.isValid.tag) {
            focusError(isValid)
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
    }, [isFormReadyToSubmit, values, addNewPost])

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
                <input type="text" name={'title'} ref={titleRef} value={values.title} onChange={onChange}
                       className={cn(s['input-title'], {[s['invalid']]: !isValid.title})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="date" className={s['form-label']}>
                    <img src="/Frame1.svg" alt="icon-calendar"/>
                    <span>Date</span></label>
                <input type="date" id={'date'} ref={dateRef} name={'date'} value={values.date} onChange={onChange}
                       className={cn(s['input'], {[s['invalid']]: !isValid.date})}/>
            </div>

            <div className={s['form-row']}>
                <label htmlFor="tag" className={s['form-label']}>
                    <img src="/Frame2.svg" alt="icon-tag"/>
                    <span>Tag</span></label>
                <input name={'tag'} id={'tag'} placeholder={'   optional'} type="text" value={values.tag} onChange={onChange}
                       className={cn(s['input'], {[s['invalid']]: !isValid.text})}/>
            </div>

            <textarea name="text" id="" cols="30" rows="10" ref={textRef} value={values.text} onChange={onChange}
                      className={cn(s['input'], {[s['invalid']]: !isValid.text})}/>
            <Button text={'Submit'}/>
        </form>
    );
};
