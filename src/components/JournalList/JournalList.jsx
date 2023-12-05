import './JournalList.css'
import {CardButton} from "../CardButton/CardButton.jsx";
import {JournalItem} from "../JournalItem/JournalItem.jsx";
import {useContext, useMemo} from "react";
import {UserContext} from "../../context/user.context.jsx";

export const JournalList = ({items, setItems}) => {
    const {userId} = useContext(UserContext)
    const sortItems = (a, b) => a.date < b.date ? 1 : -1
    const filteredItems = useMemo(() => {
        return (
            items
                .filter(el => el.userId === userId)
                .sort(sortItems)
        )
    }, [items, userId])


    if (items.length === 0) {
        return <p>add you first story</p>
    }


    return (
        <>
            {filteredItems
                .map(p => {
                    return (
                        <CardButton key={p.id} onClick={() => setItems(p)}>
                            <JournalItem title={p.title} date={p.date} text={p.text} tag={p.tag}/>
                        </CardButton>
                    )
                })}
        </>
    );
};
