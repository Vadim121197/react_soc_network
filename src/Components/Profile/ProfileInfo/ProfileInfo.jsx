import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (<div className={s.profile}>
        <div>
            <img src={props.contentAvatar}
                className={s.content_avatar} />
        </div>
        <div className={s.descriptionsBlock}>
            <div className={s.avatarDescription}>
                <img src={props.avatar} className={s.avatar} />
            </div>
            <div className={s.descriptionUser}>
                <h2>{props.name}</h2>
                <hr />
                <h4>Birthday date: {props.birthDate}</h4>
                <h4>Locations: {props.locations}</h4>
                <h4>Language: {props.language}</h4>
                <h4>Educations: {props.educations}</h4>
            </div>
        </div>
    </div>
    );
};
export default ProfileInfo;
