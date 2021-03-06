import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogues"
                       render={() => <DialoguesContainer
                       />}/>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer
                       />}/>
                <Route path="/users"
                       render={() => <UsersContainer
                       />}/>
                <Route path="/login"
                       render={() => <LoginPage
                       />}/>
            </div>
        </div>
    );
};

export default App;
