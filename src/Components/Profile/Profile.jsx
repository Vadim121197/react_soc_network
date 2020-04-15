import React from "react";
import s from "./Profile.module.css";
import MyPost from './MyPost/MyPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostAdd from "./PostAdd/PostAdd";


const Profile = (props) => {
    return (<div>
            <ProfileInfo userProfile={props.state.userProfile}/>
            <PostAdd state={props.state.titles} addPost={props.addPost}/>
            <MyPost userProfile={props.state.userProfile} titles={props.state.titles}/>
        </div>
    );
};
export default Profile;
