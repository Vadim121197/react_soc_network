import React from "react";
import s from "./Messages.module.css";
import Contact from "./Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MessageGuest from "./Message/MessageGuest/MessageGuest";
import MessageUser from "./Message/MessageUser/MessageUser";
import messages from '../../ MyData/messagesData';


const Messages = (props) => {
    const message = messages.map(element=>< Contact key={element.id} name={element.name} id={element.id}
    mes={element.msg} avatar={element.avatar}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                {message}
            </div>
            <Switch>
                <Route path={'/messages/'} />
            </Switch>
            <div className={s.messages}>
                <MessageGuest />
                <MessageUser />
                <MessageGuest />
            </div>
        </div>
    );
};
export default Messages;

