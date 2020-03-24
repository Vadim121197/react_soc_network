import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  return (
        <div className={s.post}>
          <div>
          <div className={s.item}>
            new post
          </div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <Post title = 'Hello my friend'/>
          <Post title = 'Amigo'/>
        </div>
  );
};
export default MyPost;
