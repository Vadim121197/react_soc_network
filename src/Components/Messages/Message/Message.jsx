import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (<div className={s.message}>
        <img src={props.avatar} alt="" className={s.avatar} />
        <div className={s.aboutAuthor}>
        <h6 className={s.nameAuthor}>{props.nameAuthor}</h6>
        <p className={s.textMessage}>{props.textMessage}</p>
        <small className={s.time}>{props.time}</small>
    </div>
    </div>
  
    );
};
export default Message
