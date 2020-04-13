import React from "react";
import s from "./MessageGuest.module.css";

const MessageGuest = (props) => {
    return (<div className={s.message}>
            <div className={s.image}>
                <img src={props.contact[1].avatar} alt="" className={s.avatar}/>
            </div>
            <div className={s.textMessage}>{props.contact[1].mes}</div>
        </div>
    );
};
export default MessageGuest
