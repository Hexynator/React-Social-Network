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
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name="Dimych" id="1"/>
                <DialogueItem name="Andrey" id="2"/>
                <DialogueItem name="Sveta" id="3"/>
                <DialogueItem name="Sasha" id="4"/>
                <DialogueItem name="Victor" id="5"/>
                <DialogueItem name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your it " />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>

    );
}

export default Dialogues;