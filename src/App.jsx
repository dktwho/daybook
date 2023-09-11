import './App.css'
import {Button} from "./components/Button/Button.jsx";
import {JournalItem} from "./components/JournalItem/JournalItem.jsx";

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
            <JournalItem title={data[0].title} date={data[0].date} text={data[0].text}/>
            <JournalItem title={data[1].title} date={data[1].date} text={data[1].text}/>
        </>
    )
}

export default App
