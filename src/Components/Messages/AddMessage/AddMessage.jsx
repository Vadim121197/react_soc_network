import React from "react";
import s from "./AddMessage.module.css";

const AddMessage = (props) => {
    let ref = React.createRef();
    let msgAdd = ()=>{
        props.addMsg();
    }
    let changeTextArea = ()=>{
        props.changeTextAreaMsg(ref.current.value);
    }
    return (<div className={s.msgAdd}>
        <div className={s.inputText}>
            <textarea onChange={changeTextArea} ref={ref} value={props.state.msg}></textarea>
        </div>
        <div className={s.inputBtn}>
            <button onClick={msgAdd}>Send</button>
        </div>
    </div>
    );
};
export default AddMessage;
