import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import StoreContext from "../../StoreContext";

const DialoguesContainer = (props) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let onSendMessageClick = (e) => { // event
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => { // event
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return <Dialogues updateNewMessageBody={onNewMessageChange}
                                  sendMessage={onSendMessageClick}
                                  dialoguesPage={store.getState().dialoguesPage}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialoguesContainer;