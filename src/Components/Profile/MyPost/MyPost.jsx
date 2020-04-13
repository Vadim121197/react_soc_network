import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {

    return (
        <div className={s.post}>
                <div className={s.postList}>
                    <Post userProfile={props.userProfile}/>
                </div>
            </div>
    );
};
export default MyPost;
