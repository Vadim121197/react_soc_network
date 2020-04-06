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
                    <Post title='Чуваки, зацените мою новую татуху на аватарке) #m=ca2' />
                    <Post title='Теория Эйнштейна базируется на двух основных принципах:

1. Принцип относительности: физические законы сохраняются даже для тел, являющихся инерциальными системами отсчета, т. е. двигающимися на постоянной скорости относительно друг друга.  

2. Принцип скорости света: скорость света остается неизменной для всех наблюдателей, независимо от их скорости по отношению к источнику света. (Физики обозначают скорость света буквой с).' />
                </div>
            </div>
        </div>
    );
};
export default MyPost;
