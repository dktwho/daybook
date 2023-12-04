import './JournalList.css'
import {CardButton} from "../CardButton/CardButton.jsx";
import {JournalItem} from "../JournalItem/JournalItem.jsx";
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

export const JournalList = ({items}) => {
    const {userId} = useContext(UserContext)
    if (items.length === 0) {
        return <p>add you first story</p>
    }
    const sortItems = (a, b) => a.date < b.date ? 1 : -1

    return (
        <>
            {items
                .filter(el => el.userId === userId)
                .sort(sortItems)
                .map(p => {
                    return (
                        <CardButton key={p.id}>
                            <JournalItem title={p.title} date={p.date} text={p.text} tag={p.tag}/>
                        </CardButton>
                    )
                })}
        </>
    );
};
