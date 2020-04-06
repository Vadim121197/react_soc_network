import React from "react";
import s from "./ProfileInfo.module.css";
import userData from '../../../ MyData/dataUser';

const ProfileInfo = (props) => {
    return (<div className={s.profile}>
        <div>
            <img src={userData[0].avatarContent}
                className={s.content_avatar} />
        </div>
        <div className={s.descriptionsBlock}>
            <div className={s.avatarDescription}>
                <img src={userData[0].avatar} className={s.avatar} />
            </div>
            <div className={s.descriptionUser}>
                    <h2>{userData[0].name}</h2>
                    <hr/>
                    <h4>Birthday date: {userData[0].birthDate}</h4>
                    <h4>Locations: {userData[0].location}</h4>
                    <h4>Language: {userData[0].language}</h4>
                    <h4>Educations: {userData[0].education}</h4>
            </div>
        </div>
    </div>
    );
};
export default ProfileInfo;
