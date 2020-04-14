import React from "react";
import s from "./Friends.module.css";

const Friends=(props)=>{
    return(<div className={s.friendsPost}>
           <div className={s.image}>
                <img  src={props.avatar} alt="" className={s.avatar}/>
            </div>
            <div className={s.name}>{props.name}</div>
    </div>
    )
}
export default Friends;