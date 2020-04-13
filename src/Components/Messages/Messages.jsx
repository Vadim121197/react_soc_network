import React from "react";
import s from "./Messages.module.css";
import Contact from "./Contact/Contact";
import MessageGuest from "./Message/MessageGuest/MessageGuest";
import MessageUser from "./Message/MessageUser/MessageUser";

const Messages = (props) => {
    let addContact = props.contact.map(el => <Contact name={el.name} id={el.id} mes={el.mes} avatar={el.avatar} />)
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                {addContact}
            </div>
            <div className={s.messages}>
                <MessageGuest contact={props.contact}/>
                <MessageUser />
            </div>
        </div>
    );
};
export default Messages;

