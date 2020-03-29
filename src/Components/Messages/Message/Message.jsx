import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (<div className={s.message}>
                <img className={s.avatar}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgek701-Ebaxr5CDun6VY2mP-GMNuoM8DozXtArgE0B1T_QysN'/>
                <div className={s.nameAuthor}>Vadim</div>
                <div className={s.textMessag}>Hello, mother fucker</div>
                <div className={s.time}>07:20</div>
            </div>
    );
};
export default Message;
