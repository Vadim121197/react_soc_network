import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
    return (<div className={s.post}>
        <div className={s.postAvatar}>
            <img
                src={props.userProfile.avatar}
                className={s.avatar} />
        </div>
        <div className={s.postText}>
            <h3>{props.userProfile.name}</h3>
            <p>{props.userProfile.title}</p>
        </div>
    </div>
    );
};
export default Post;
