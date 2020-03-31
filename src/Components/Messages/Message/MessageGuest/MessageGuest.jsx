import React from "react";
import s from "./MessageGuest.module.css";

const MessageGuest = (props) => {
    return (<div className={s.message}>
            <div className={s.image}>
                <img src='https://wallpaperaccess.com/full/1289380.png' alt="" className={s.avatar}/>
            </div>
            <div className={s.textMessage}>http://invest3w.com/
                меняю на right, он все равно встает слева поверх первого рекламного блока...
                (Код сюда не могу скопировать ,сообщение не пропускает. Ваш код HTML не может быть принят: Недопустимый тег)</div>
        </div>
    );
};
export default MessageGuest
