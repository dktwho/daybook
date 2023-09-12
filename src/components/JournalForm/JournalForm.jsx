import {Button} from "../Button/Button.jsx";

export const JournalForm = ({addNewPost}) => {

    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        addNewPost(formProps)
    }

    return (
        <form className={'journal-form'} onSubmit={addJournalItem}>
            <input type="text" name={'title'}/>
            <input type="date" name={'date'}/>
            <input name={'tag'} type="text"/>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <Button text={'Submit'} onClick={() => console.log('clicked')}/>
        </form>
    );
};
