import React from "react";
import s from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = (props) => {
    return (<div className={s.messages}>
            <div className={s.search}>
                <input className={s.searchTitle} value='search'/>
            </div>
            <Message />
        </div>
    );
};
export default Messages;
