import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import userData from '../../../ MyData/dataUser';
import postData from '../../../ MyData/postsData';

const MyPost = (props) => {
    const postsData = postData.map(element => <Post key={element.id} title={element.title} name={element.name}
                        avatar={element.avatar}/>)
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
                    {postsData}
                </div>
            </div>
        </div>
    );
};
export default MyPost;
