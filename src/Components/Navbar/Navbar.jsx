import React from "react";
import s from "./Navbar.module.css";
import {NavLink,Link} from "react-router-dom";
import Friends from './Friends/Friends'

const Navbar = (props) => {
    const addFriends=props.state.map(el=><Friends avatar={el.avatar} name={el.name}/>)
    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink exact to='/' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={
                        {
                            pathname: '/music',
                            state: {
                                from: "root"
                            }
                        }
                    }
                             activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>
                <div className={s.itemFriends}><a>Friends</a></div>
                <div className={s.friendsList}>{addFriends}</div>
            </nav>
        </div>
    );
};
export default Navbar;
