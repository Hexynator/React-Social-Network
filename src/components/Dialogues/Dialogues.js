import React from 'react'
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialoguesReducer";

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

    let state =props.store.getState().dialoguesPage;

    let dialogueElements = state.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody =  state.newMessageBody;

    let onSendMessageClick =  (e) => { // event
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange =  (e) => { // event
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogueElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message here'
                              ref={newMessageElement}></textarea>
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