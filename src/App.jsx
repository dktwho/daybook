import './App.css'
import {JournalItem} from "./components/JournalItem/JournalItem.jsx";
import {CardButton} from "./components/CardButton/CardButton.jsx";
import {LeftPanel} from "../layout/LeftPanel/LeftPanel.jsx";
import {Header} from "./components/Header/Header.jsx";
import {JournalList} from "./components/JournalList/JournalList.jsx";
import {Body} from "../layout/Body/Body.jsx";
import {JournalAddButton} from "./components/JournalAddButton/JournalAddButton.jsx";
import {useState} from "react";

function App() {
    const data = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Горные походы открывают удивительные природные ландшафты',
            date: new Date()
        },
        {
            title: 'Поход в горы',
            text: 'Различают альпинизм и горный туризм',
            date: new Date()
        }
    ];
    const [inputData, setInputData] = useState('')

    const inputChange = (e) => {
        setInputData(e.currentTarget.value)
    }

    return (
        <div className={'app'}>
            <LeftPanel>
                <Header/>
                <JournalAddButton/>
                <JournalList>
                    <CardButton>
                        <JournalItem title={data[0].title} date={data[0].date} text={data[0].text}/>
                    </CardButton>
                    <CardButton>
                        <JournalItem title={data[1].title} date={data[1].date} text={data[1].text}/>
                    </CardButton>
                </JournalList>
            </LeftPanel>
            <Body>
                <input value={inputData} type="text" onChange={inputChange}/>
            </Body>


        </div>
    )
}

export default App
