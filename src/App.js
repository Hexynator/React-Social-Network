import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
 import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogues"
                       render={() => <DialoguesContainer
                           store={props.store}
                       />}/>
                <Route path="/profile"
                       render={() => <Profile
                           store={props.store}/>}/>
            </div>
        </div>
    );
};

export default App;
