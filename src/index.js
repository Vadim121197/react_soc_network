import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const contact = [
    {
        id: 1,
        name: 'Vadim',
        mes: 'Hello',
        avatar: 'https://author.today/content/2020/02/29/18600bef2a5d4b83bccc5d367541404b.jpg'
    },
    {
        id: 2,
        name: 'Dasha',
        mes: 'Hi',
        avatar: 'https://vjoy.cc/wp-content/uploads/2019/12/1djmi2aljuo.jpg'
    },
    {
        id: 3,
        name: 'Lucky',
        mes: 'Myau',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjqeayhuxu67T2yz72DWsJihggmSiVoSah9NVxopIErKVngp09&usqp=CAU'
    }
];

const userProfile = {
    contentAvatar: "https://bm.img.com.ua/berlin/storage/600x500/2/ab/6e5b54cf6962849d214d2e5c12625ab2.jpg",
    avatar: "https://a.d-cd.net/3YAAAgGTYuA-960.jpg",
    name: 'Albert Einstein',
    birthDate: "14.03.1879",
    locations: 'Odessa, Ukraine',
    language: "JS",
    educations: "VITI",
    title: 'Чуваки, зацените мою новую татуху на аватарке) #m=ca2'
}




ReactDOM.render(
    <React.StrictMode>
        <App contact={contact} userProfile={userProfile}/>
    </React.StrictMode>,
    document.getElementById('root')
);


