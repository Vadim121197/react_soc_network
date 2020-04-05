import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div className={s.post}>
            <div>
                <div className={s.item}>
                    <h3>My posts</h3>
                </div>
                <div><textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post title='Hello my friend'/>
            <Post title='Amigo'/>
        </div>
    );
};
export default MyPost;
