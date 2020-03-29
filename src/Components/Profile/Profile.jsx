import React from "react";
import s from "./Profile.module.css";
import MyPost from './MyPost/MyPost'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/ru/8/8b/Black-mirror-show-logo.jpg"
                     className={s.content_avatar}/>
            </div>
            <div>
                <img src="https://wallpaperaccess.com/full/1289380.png" className={s.avatar}/>
            </div>

            <MyPost/>

        </div>
    );
};
export default Profile;
