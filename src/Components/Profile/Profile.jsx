import React from "react";
import s from "./Profile.module.css";
import MyPost from './MyPost/MyPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const userProfile={
    contentAvatar:"https://bm.img.com.ua/berlin/storage/600x500/2/ab/6e5b54cf6962849d214d2e5c12625ab2.jpg",
    avatar:"https://a.d-cd.net/3YAAAgGTYuA-960.jpg",
    name:'Albert Einstein',
    birthDate:"14.03.1879",
    locations:'Odessa, Ukraine',
    language:"JS",
    educations:"VITI"
}

const titlePost=[
    {
        id:1,
        title:'Чуваки, зацените мою новую татуху на аватарке) #m=ca2'
    },
    {
        id:2,
        title:'Теория Эйнштейна базируется на двух основных принципах: 1. Забей на физику; 2. Учи React'
    }
];

const Profile = (props) => {
    const addPostList = titlePost.map(el=> <MyPost avatar={el.avatar} name={el.name} title={el.title}/>)
    return (<div >
            <ProfileInfo contentAvatar={userProfile.contentAvatar}
            avatar={userProfile.avatar} name={userProfile.name} birthDate={userProfile.birthDate}
            locations={userProfile.locations} language={userProfile.language} educations={userProfile.educations}/>
            <MyPost avatar={userProfile.avatar} name={userProfile.name} title1={titlePost.title} title2={titlePost[2]}/>
        </div>
    );
};
export default Profile;
