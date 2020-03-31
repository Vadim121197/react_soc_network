import React from "react";
import s from "./Messages.module.css";
import Contact from "./Contact/Contact";
import { NavLink, BrowserRouter } from "react-router-dom";


const Messages = (props) => {
    return (<BrowserRouter>
        <div className={s.dialogs}>
            <div className='contacts'>
               <NavLink to='/messages/1'> <Contact /></NavLink>
               <NavLink to='/messages/2'> <Contact /></NavLink>
               <NavLink to='/messages/3'> <Contact /></NavLink>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    </BrowserRouter>
    );
};
export default Messages;
