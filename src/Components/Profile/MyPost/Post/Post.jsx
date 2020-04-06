import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (<div className={s.post}>
        <div className={s.postAvatar}>
            <img
                src='https://a.d-cd.net/3YAAAgGTYuA-960.jpg'
                className={s.avatar} />
        </div>
        <div className={s.postText}>
            <h3>Albert Einstein</h3>
            <p>{props.title}</p>
        </div>
    </div>
    
    );
};
export default Post;
