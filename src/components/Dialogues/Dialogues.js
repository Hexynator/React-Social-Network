import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = "/dialogues/" + props.id
    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.dialogue}>{props.message}</div>
    );
};

const Dialogues = (props) => {

    let dialogues = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How is your day'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Yo'},
    ]

    let dialogueElements = dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogueElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogues;