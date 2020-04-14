import React from "react";
import s from "./Messages.module.css";
import Contact from "./Contact/Contact";
import MessageGuest from "./Message/MessageGuest/MessageGuest";
import MessageUser from "./Message/MessageUser/MessageUser";

const Messages = (props) => {
    let addDialogs = props.state.dialogs.map(el => <Contact name={el.name} id={el.id} mes={el.mes} avatar={el.avatar} />)
    let addMessagesGuest=props.state.messages.map(m=><MessageGuest message={m.message} contact={props.state.dialogs}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                {addDialogs}
            </div>
            <div className={s.messages}>
                {addMessagesGuest}
                <MessageUser/>
            </div>
        </div>
    );
};
export default Messages;

