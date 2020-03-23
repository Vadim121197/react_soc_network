import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
<div className={s.profile}>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/ru/8/8b/Black-mirror-show-logo.jpg" className={s.content_avatar}/>
        </div>
          <div>
            <img src="https://wallpaperaccess.com/full/1289380.png" className={s.avatar}/>
          </div>
        <div className={s.post}>
          my post
          <div className={s.item}>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
            <div>
              post 3
            </div>
          </div>
        </div>
      </div>
  );
};
export default Profile;
