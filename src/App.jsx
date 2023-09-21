import './App.css'
import {LeftPanel} from "../layout/LeftPanel/LeftPanel.jsx";
import {Header} from "./components/Header/Header.jsx";
import {JournalList} from "./components/JournalList/JournalList.jsx";
import {Body} from "../layout/Body/Body.jsx";
import {JournalAddButton} from "./components/JournalAddButton/JournalAddButton.jsx";
import {JournalForm} from "./components/JournalForm/JournalForm.jsx";
import {v4 as uuidv4} from 'uuid';
import {useLocalStorage} from "./hooks/useLocalStorageHook.js";

const mapItems = (items) => {
    if (!items) {
        return []
    }
    return items.map(i => ({...i, date: new Date(i.date)}))
}

function App() {
    const [items, setItems] = useLocalStorage('data')
    const addNewItem = (item) => {
        setItems([...mapItems(items), {
            id: uuidv4(),
            text: item.text,
            title: item.title,
            tag: item.tag,
            date: new Date(item.date)
        }])
    }


    return (
        <div className={'app'}>
            <LeftPanel>
                <Header />
                <JournalAddButton/>
                <JournalList items={mapItems(items)}/>
            </LeftPanel>
            <Body>
                <JournalForm addNewPost={addNewItem}/>
            </Body>
        </div>
    )
}

export default App

