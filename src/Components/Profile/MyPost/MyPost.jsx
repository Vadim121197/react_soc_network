import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
    const addPostList=props.titles.map(el=> <Post userProfile={props.userProfile} title={el.title}/>);
    
    return (
        <div className={s.post}>
                <div className={s.postList}>
                    {addPostList}
                </div>
            </div>
    );
};
export default MyPost;
