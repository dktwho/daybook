import {Button} from "../Button/Button.jsx";
import {useContext, useEffect, useReducer, useRef} from "react";
import s from './JournalForm.module.css'
import {formReducer, INITIAL_STATE} from "./JournalForm.state.js";
import {Input} from "../Input/Input.jsx";
import {UserContext} from "../../context/user.context.js";
import cn from 'classnames'

export const JournalForm = ({addNewPost}) => {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const {isValid, isFormReadyToSubmit, values} = formState
    const titleRef = useRef()
    const dateRef = useRef()
    const textRef = useRef()
    const {userId} = useContext(UserContext)

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus()
                break;
            case !isValid.date:
                dateRef.current.focus()
                break;
            case !isValid.text:
                textRef.current.focus()
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
            {userId}
            <div>
                <Input type="text"
                       name={'title'}
                       isValid={isValid.title}
                       ref={titleRef}
                       value={values.title}
                       onChange={onChange}
                       appearance={'title'}
                />
            </div>

            <div className={s['form-row']}>
                <label htmlFor="date" className={s['form-label']}>
                    <img src="/Frame1.svg" alt="icon-calendar"/>
                    <span>Date</span></label>
                <Input type="date"
                       id={'date'}
                       ref={dateRef}
                       name={'date'}
                       isValid={isValid.date}
                       value={values.date}
                       onChange={onChange}
                />
            </div>

            <div className={s['form-row']}>
                <label htmlFor="tag" className={s['form-label']}>
                    <img src="/Frame2.svg" alt="icon-tag"/>
                    <span>Tag</span></label>
                <Input name={'tag'}
                       id={'tag'}
                       placeholder={'   optional'}
                       type="text" value={values.tag}
                       onChange={onChange}
                />
            </div>

            <textarea name="text" id="" cols="30" rows="10" ref={textRef} value={values.text} onChange={onChange}
                      className={cn(s['input'], {     [s['invalid']]: !isValid.text   })}
            />
            <Button text={'Сохранить'}/>
        </form>

    );
};
