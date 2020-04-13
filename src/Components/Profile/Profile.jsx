import React from "react";
import s from "./Profile.module.css";
import MyPost from './MyPost/MyPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostAdd from "./PostAdd/PostAdd";


const Profile = (props) => {
    return (<div>
            <ProfileInfo userProfile={props.userProfile}/>
            <PostAdd/>
            <MyPost userProfile={props.userProfile}/>
        </div>
    );
};
export default Profile;
