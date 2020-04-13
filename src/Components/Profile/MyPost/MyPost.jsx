import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div className={s.post}>
            <div className={s.wtf}>

            </div>
            <div className={s.postsDescriptions}>
                <div className={s.postAdd}>
                    <div className={s.inputText}>
                        <textarea></textarea>
                    </div>
                    <div className={s.inputBtn}>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.postList}>
                    <Post name={props.name} avatar={props.avatar} title = {props.title1}/>
                </div>
            </div>
        </div>
    );
};
export default MyPost;
