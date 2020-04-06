import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (<div className={s.profile}>
        <div>
            <img src="https://bm.img.com.ua/berlin/storage/600x500/2/ab/6e5b54cf6962849d214d2e5c12625ab2.jpg"
                className={s.content_avatar} />
        </div>
        <div className={s.descriptionsBlock}>
            <div className={s.avatarDescription}>
                <img src="https://a.d-cd.net/3YAAAgGTYuA-960.jpg" className={s.avatar} />
            </div>
            <div className={s.descriptionUser}>
                    <h2>Albert Einstein</h2>
                    <hr/>
                    <h4>Birthday date: 14.03.1879</h4>
                    <h4>Locations: Odessa, Ukraine</h4>
                    <h4>Language: JS</h4>
                    <h4>Educations: VITI</h4>
            </div>
        </div>
    </div>
    );
};
export default ProfileInfo;
