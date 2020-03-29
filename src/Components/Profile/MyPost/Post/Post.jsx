import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (<div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9MvvCu2uZUeq_EYdsKE132cebunludxEJniucd8ejNSIp3TWP'
                className={s.avatar}></img>
            {props.title}
            <div>
                <span>like</span>
            </div>
        </div>

    );
};
export default Post;
