import {useState} from "react";

export const JournalForm = () => {
    const [inputData, setInputData] = useState('')

    const inputChange = (e) => {
        setInputData(e.currentTarget.value)
    }
    return (
        <input value={inputData} type="text" onChange={inputChange}/>
    );
};
