import React from "react";
import s from "./MessageGuest.module.css";

const MessageGuest = (props) => {
    return (<div className={s.message}>
            <div className={s.image}>
                <img  alt="" className={s.avatar}/>
            </div>
            <div className={s.textMessage}>{props.message}</div>
        </div>
    );
};
export default MessageGuest
