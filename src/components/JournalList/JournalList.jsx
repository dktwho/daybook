import './JournalList.css'
import {CardButton} from "../CardButton/CardButton.jsx";
import {JournalItem} from "../JournalItem/JournalItem.jsx";

export const JournalList = ({items}) => {
    if (items.length === 0) {
        return <p>add you first story</p>
    }
    const sortItems = (a, b) => a.date < b.date ? 1 : -1

    return (
        <>
            {items.sort(sortItems).map(p => {
                return (
                    <CardButton key={p.id}>
                        <JournalItem title={p.title} date={p.date} text={p.text} tag={p.tag}/>
                    </CardButton>
                )
            })}
        </>
    );
};
