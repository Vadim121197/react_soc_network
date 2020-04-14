import React from "react";
import s from "./MessageUser.module.css";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";


const MessageUser = (props) => {
    return (
            <div className={s.message}>
            <div className={s.textMessage}>Пытаюсь поставить рекламный блок на сайт</div>
            <div className={s.image}>
                <Link to='/'><img src='https://a.d-cd.net/3YAAAgGTYuA-960.jpg' alt="" className={s.avatar}/></Link>
            </div>
        </div>
    );
};
export default MessageUser

