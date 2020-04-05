import React from "react";
import s from "./Music.module.css";
import {useLocation,useHistory} from 'react-router';

const Music = (props) => {

        let history = useHistory();

        function handleClick() {
            history.push("/messages");
        }

        return (
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        );

};
export default Music;

