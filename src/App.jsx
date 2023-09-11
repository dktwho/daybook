import './App.css'
import {Button} from "./components/Button/Button.jsx";
import {JournalItem} from "./components/JournalItem/JournalItem.jsx";

function App() {
    const date = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Горные походы открывают удивительные природные ландшафты.',
            date: new Date()
        },
        {
            title: 'Поход в горы',
            text: 'Различают альпинизм и горный туризм. ',
            date: new Date()
        }
    ];

    return (
        <>
            <h1>Title</h1>
            <p>Some text</p>
            <Button/>
            <JournalItem title={date[0].title} date={date[0].date} text={date[0].text}/>
            <JournalItem title={date[1].title} date={date[1].date} text={date[1].text}/>
        </>
    )
}

export default App
