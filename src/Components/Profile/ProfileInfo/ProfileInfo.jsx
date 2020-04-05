import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (<div className={s.profile}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/ru/8/8b/Black-mirror-show-logo.jpg"
                     className={s.content_avatar}/>
            </div>
            <div className={s.descriptionsBlock}>
                <img src="https://wallpaperaccess.com/full/1289380.png" className={s.avatar}/>
            </div>
        </div>
    );
};
export default ProfileInfo;
