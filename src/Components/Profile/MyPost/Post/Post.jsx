import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
    return (<div className={s.post}>
        <div className={s.postAvatar}>
            <img
                src={props.avatar}
                className={s.avatar} />
        </div>
        <div className={s.postText}>
            <h3>{props.name}</h3>
            <p>{props.title}</p>
        </div>
    </div>
    
    );
};
export default Post;
