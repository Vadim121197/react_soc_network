import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (<div className={s.message}>
            <div className={s.image}>
                <img src='https://wallpaperaccess.com/full/1289380.png' alt="" className={s.avatar}/>
            </div>
            <div className={s.textMessage}>Hello</div>
        </div>
    );
};
export default Message
