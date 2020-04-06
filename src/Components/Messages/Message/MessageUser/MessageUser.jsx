import React from "react";
import s from "./MessageUser.module.css";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Profile from "../../../Profile/Profile";

const MessageUser = (props) => {
    return (<BrowserRouter>
            <div className={s.message}>
            <div className={s.textMessage}>Наташа, пытаюсь поставить рекламный блок на сайт. внутри блока будет скрипт *Как выровнять блок по правому краю*.
                Когда вставляю в блок скрипт, он сдвигает весь сайт вниз, то есть блок должен появиться справа на экране, а он сдвигает весь сайт. Получается пустое окно с блоком справа и ниже блока уже весь сайт. Подскажите где поискать ответ...</div>
            <div className={s.image}>
                <Link to='/'><img src='https://a.d-cd.net/3YAAAgGTYuA-960.jpg' alt="" className={s.avatar}/></Link>
            </div>
        </div>

        </BrowserRouter>
    );
};
export default MessageUser

