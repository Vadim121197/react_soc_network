import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, subscribe, updateNewPost} from "./data/state";
import state from "./data/state";

let reRender=(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(state);
subscribe(reRender)




