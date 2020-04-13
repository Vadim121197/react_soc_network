import React from "react";
import s from "./Messages.module.css";
import Contact from "./Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MessageGuest from "./Message/MessageGuest/MessageGuest";
import MessageUser from "./Message/MessageUser/MessageUser";


const contact = [
    {
        id: 1,
        name: 'Vadim',
        mes: 'Hello my friends',
        avatar: 'https://wallpaperaccess.com/full/1289380.png'
    },
    {
        id: 2,
        name: 'Dasha',
        mes: 'Hi',
        avatar: 'https://wallpaperaccess.com/full/1289380.png'
    },
    {
        id: 3,
        name: 'Lucky',
        mes: 'Myau',
        avatar: 'https://wallpaperaccess.com/full/1289380.png'
    }
]
const Messages = (props) => {
    let addContact = contact.map(el => <Contact name={el.name} id={el.id} mes={el.mes} avatar={el.avatar} />)
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                {addContact}
            </div>
            <div className={s.messages}>
                <MessageGuest />
                <MessageUser />
                <MessageGuest />
            </div>
        </div>
    );
};
export default Messages;

