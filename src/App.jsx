import './App.css'
import {LeftPanel} from "../layout/LeftPanel/LeftPanel.jsx";
import {Header} from "./components/Header/Header.jsx";
import {JournalList} from "./components/JournalList/JournalList.jsx";
import {Body} from "../layout/Body/Body.jsx";
import {JournalAddButton} from "./components/JournalAddButton/JournalAddButton.jsx";
import {JournalForm} from "./components/JournalForm/JournalForm.jsx";
import {v4 as uuidv4} from 'uuid';
import {useLocalStorage} from "./hooks/useLocalStorageHook.js";
import {UserContextProvider} from "./context/user.context.jsx";
import {useState} from "react";

const mapItems = (items) => {
    if (!items) {
        return []
    }
    return items.map(i => ({...i, date: new Date(i.date)}))
}

function App() {
    const [items, setItems] = useLocalStorage('data')
    const [selectedItem, setSelectedItem] = useState({})


    const addNewItem = (item) => {
        if (!item.id) {
            setItems([...mapItems(items), {
                id: uuidv4(),
                ...item,
                // text: item.text,
                // title: item.title,
                tag: item.tag,
                date: new Date(item.date)
            }])
        } else {
            setItems([...mapItems(items).map(i => {
                if (i.id === item.id) {
                    return {...item}
                }
                return i;
            })])
        }
    }

    const deleteItem = (id) => {
        setItems([...items.filter(i => i.id !== id)])
    }

    return (
        <UserContextProvider>
            <div className={'app'}>
                <LeftPanel>
                    <Header/>
                    <JournalAddButton/>
                    <JournalList items={mapItems(items)} setItems={setSelectedItem}/>
                </LeftPanel>
                <Body>
                    <JournalForm addNewPost={addNewItem} data={selectedItem} onDelete={deleteItem}/>
                </Body>
            </div>
        </UserContextProvider>
    )
}

export default App

