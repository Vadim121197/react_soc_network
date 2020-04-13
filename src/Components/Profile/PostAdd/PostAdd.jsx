import React from "react";
import s from "./PostAdd.module.css";

const PostAdd= (props) => {
    return (<div className={s.postAdd}>
                <div className={s.inputText}>
                    <textarea></textarea>
                </div>
                <div className={s.inputBtn}>
                    <button>Add post</button>
                </div>
            </div>
    );
};
export default PostAdd;
