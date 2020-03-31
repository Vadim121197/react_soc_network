import React from "react";
import s from "./Contact.module.css";


const Contact = (props) => {
    return ( <div className={s.messagesItems}>
            <div className={s.image}>
                <img src='https://wallpaperaccess.com/full/1289380.png' alt="" className={s.avatar} />
            </div>
            <div className={s.aboutAuthor}>
                <div className={s.nameAuthor}>Vadim</div>
                <div className={s.textMessage}>Hello</div>
            </div>
        </div>
    
    );
};
export default Contact;
