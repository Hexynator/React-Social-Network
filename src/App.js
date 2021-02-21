import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogues from "./components/Dialogues/Dialogues";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path="/dialogues"
                           render={() => <Dialogues
                               state={props.state.dialoguesPage}/>}/>
                    <Route path="/profile"
                           render={() => <Profile
                               state={props.state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;
