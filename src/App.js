import React from "react";
import s from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar state={props.state.messagesPage.dialogs}/>
                <div className={s.appWraperContent}>
                    <Switch>
                        <Route exact path='/' render={()=><Profile state={props.state.profilesPage}/>}/>
                        <Route path='/messages' render={()=><Messages state={props.state.messagesPage}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};


export default App;