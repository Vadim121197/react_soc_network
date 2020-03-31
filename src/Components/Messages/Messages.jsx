import React from "react";
import s from "./Messages.module.css";
import Contact from "./Contact/Contact";
import { NavLink, BrowserRouter } from "react-router-dom";
import MessageGuest from "./Message/MessageGuest/MessageGuest";
import MessageUser from "./Message/MessageUser/MessageUser";


const Messages = (props) => {
    return (<BrowserRouter>
        <div className={s.dialogs}>
            <div className={s.contacts}>
               <NavLink to='/messages/1' className={s.item} activeClassName={s.active}> <Contact /></NavLink>
               <NavLink to='/messages/2' className={s.item} activeClassName={s.active}> <Contact /></NavLink>
               <NavLink to='/messages/3' className={s.item} activeClassName={s.active}> <Contact /></NavLink>
            </div>
            <div className={s.messages}>
                <MessageGuest />
                <MessageUser />
                <MessageGuest />
            </div>
        </div>
    </BrowserRouter>
    );
};
export default Messages;
