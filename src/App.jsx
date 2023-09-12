import './App.css'
import {JournalItem} from "./components/JournalItem/JournalItem.jsx";
import {CardButton} from "./components/CardButton/CardButton.jsx";
import {LeftPanel} from "../layout/LeftPanel/LeftPanel.jsx";
import {Header} from "./components/Header/Header.jsx";
import {JournalList} from "./components/JournalList/JournalList.jsx";
import {Body} from "../layout/Body/Body.jsx";
import {JournalAddButton} from "./components/JournalAddButton/JournalAddButton.jsx";
import {JournalForm} from "./components/JournalForm/JournalForm.jsx";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
    const data = [
        // {
        //     id: uuidv4(),
        //     title: 'Подготовка к обновлению курсов',
        //     text: 'Горные походы открывают удивительные природные ландшафты',
        //     date: new Date(),
        //     tag: 'tag1'
        //
        // },
        // {
        //     id: uuidv4(),
        //     title: 'Поход в горы',
        //     text: 'Различают альпинизм и горный туризм',
        //     date: new Date(),
        //     tag: 'tag2'
        // }
    ];

    const [items, setItems] = useState(data)
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

    const sortItems = (a, b) => a.date < b.date ? 1 : -1

    return (
        <div className={'app'}>
            <LeftPanel>
                <Header/>
                <JournalAddButton/>
                <JournalList>
                    {!items.length === 0 && <p>add you first story</p>}
                    {items.length > 0 && items.sort(sortItems).map(p => {
                        return (
                            <CardButton key={p.id}>
                                <JournalItem title={p.title} date={p.date} text={p.text}/>
                            </CardButton>
                        )
                    })}
                </JournalList>
            </LeftPanel>
            <Body>
                <JournalForm addNewPost={addNewItem}/>
            </Body>


        </div>
    )
}

export default App
