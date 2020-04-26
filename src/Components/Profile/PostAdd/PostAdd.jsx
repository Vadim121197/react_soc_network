import React from "react";
import s from "./PostAdd.module.css";

const PostAdd = (props) => {

        let readTextarea = React.createRef();
        let addPost = () => {
            props.addPost()
        }
        let read = ()=>{
            props.updateNewPost(readTextarea.current.value)
        }

        return (<div className={s.postAdd}>
                <div className={s.inputText}>
                    <textarea onChange={read} ref={readTextarea} value={props.newPostText}/>
                </div>
                <div className={s.inputBtn}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        );
    }
;
export default PostAdd;
