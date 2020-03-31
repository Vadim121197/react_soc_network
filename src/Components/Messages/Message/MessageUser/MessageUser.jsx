import React from "react";
import s from "./MessageUser.module.css";
import {BrowserRouter, NavLink} from "react-router-dom";

const MessageUser = (props) => {
    return (<BrowserRouter>
            <div className={s.message}>
            <div className={s.textMessage}>Наташа, пытаюсь поставить рекламный блок на сайт. внутри блока будет скрипт *Как выровнять блок по правому краю*.
                Когда вставляю в блок скрипт, он сдвигает весь сайт вниз, то есть блок должен появиться справа на экране, а он сдвигает весь сайт. Получается пустое окно с блоком справа и ниже блока уже весь сайт. Подскажите где поискать ответ...</div>
            <div className={s.image}>
                <NavLink to='/'><img src='https://wallpaperaccess.com/full/1289380.png' alt="" className={s.avatar}/></NavLink>
            </div>
        </div>
        </BrowserRouter>
    );
};
export default MessageUser
