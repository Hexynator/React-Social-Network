import React from 'react'
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

let newMessageElement = React.createRef();

let addMessage = () => {
    let msg = newMessageElement.current.value;
    alert(msg);
}

const Dialogues = (props) => {

    let dialogueElements = props.state.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogueElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dialogues;