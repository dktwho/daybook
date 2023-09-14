import './App.css'
import {LeftPanel} from "../layout/LeftPanel/LeftPanel.jsx";
import {Header} from "./components/Header/Header.jsx";
import {JournalList} from "./components/JournalList/JournalList.jsx";
import {Body} from "../layout/Body/Body.jsx";
import {JournalAddButton} from "./components/JournalAddButton/JournalAddButton.jsx";
import {JournalForm} from "./components/JournalForm/JournalForm.jsx";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        if (data) {
            setItems(data.map(el => ({
                ...el, date: new Date(el.date)
            })))
        }
    }, [])

    useEffect(() => {
        if(items.length) {
            localStorage.setItem('data', JSON.stringify(items))
        }
    }, [items])
    const addNewItem = (item) => {
        let newItem = {
            id: uuidv4(),
            text: item.text,
            title: item.title,
            tag: item.tag,
            date: new Date(item.date)
        }
        setItems(oldItems => ([...oldItems, newItem]))

    }


    return (
        <div className={'app'}>
            <LeftPanel>
                <Header/>
                <JournalAddButton/>
                <JournalList items={items}/>
            </LeftPanel>
            <Body>
                <JournalForm addNewPost={addNewItem}/>
            </Body>
        </div>
    )
}

export default App

