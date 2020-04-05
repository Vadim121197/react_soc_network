import React from "react";
import s from "./Messages.module.css";
import Contact from "./Contact/Contact";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import MessageGuest from "./Message/MessageGuest/MessageGuest";
import MessageUser from "./Message/MessageUser/MessageUser";


const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
               <Contact name='Vadim' id='1' mes='Hello my friends' avatar='https://wallpaperaccess.com/full/1289380.png'/>
                <Contact name='Dasha' id='2' mes='Hi' avatar='https://wallpaperaccess.com/full/1289380.png'/>
                <Contact name='Lucky' id='3' mes='WTF, nigger' avatar='https://wallpaperaccess.com/full/1289380.png'/>
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

