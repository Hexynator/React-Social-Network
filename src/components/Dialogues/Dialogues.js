import React from 'react'
import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";

const Dialogues = (props) => {

    let state = props.dialoguesPage;

    let dialogueElements = state.dialogues.map(d => <DialogueItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => { // event
        props.sendMessage();
    }
    let onNewMessageChange = (e) => { // event
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth) return <Redirect to={'/login'} />;
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogueElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}>
                              </textarea>
                </div>
                <div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogues;