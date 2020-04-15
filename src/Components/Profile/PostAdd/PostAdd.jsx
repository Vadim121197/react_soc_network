import React from "react";
import s from "./PostAdd.module.css";

const PostAdd = (props) => {


    let readTextarea = React.createRef();
    let addPost = () => {
        props.addPost(readTextarea.current.value)
    }

return (<div className={s.postAdd}>
        <div className={s.inputText}>
            <textarea ref={readTextarea}></textarea>
        </div>
        <div className={s.inputBtn}>
            <button onClick={addPost}>Add post</button>
        </div>
    </div>
);
}
;
export default PostAdd;
