import React from "react";
import s from "./Contact.module.css";
import {NavLink, useParams} from 'react-router-dom';

const Contact = (props) => {
    const {name} = useParams();
    return (<NavLink to={'/messages/'+ props.id} className={s.item} activeClassName={s.active}>
            <div className={s.messagesItems}>
                <div className={s.image}>
                    <img src={props.avatar} alt="" className={s.avatar}/>
                </div>
                <div className={s.aboutAuthor}>
                    <div className={s.nameAuthor}>{props.name}</div>
                    <div className={s.textMessage}>{props.mes}</div>
                </div>
            </div>
        </NavLink>
    );
};
export default Contact;
