import './JournalItem.css'

export const JournalItem = (props) => {
    const {title, date, text, tag} = props
    const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(date)

    return (
        <>
            <h2 className={'journal-item__header'}>{title}</h2>
            <h2 className={'journal-item__body'}>
                <div className={'journal-item__date'}>{formatedDate}</div>
                <div className={'journal-item__text'}>{text}</div>
            </h2>
            <div className={'journal-item__tag'}>{tag}</div>
        </>
    );
};

