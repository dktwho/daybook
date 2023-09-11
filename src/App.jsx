import './App.css'
import {Button} from "./components/Button/Button.jsx";
import {JournalItem} from "./components/JournalItem/JournalItem.jsx";
import {CardButton} from "./components/CardButton/CardButton.jsx";

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

    return (
        <>
            <h1>Title</h1>
            <p>Some text</p>
            <Button/>
            <CardButton>New journal story</CardButton>
            <CardButton>
                <JournalItem title={data[0].title} date={data[0].date} text={data[0].text}/>
            </CardButton>
            <CardButton>
                <JournalItem title={data[1].title} date={data[1].date} text={data[1].text}/>
            </CardButton>
        </>
    )
}

export default App
