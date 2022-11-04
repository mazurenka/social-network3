import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

const App = (props: AppPropsType ) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="dialogs/*" element={<Dialogs
                            dialogs={props.state.dialogs}
                            messages={props.state.messages}/>}/>
                        <Route path="profile/*" element={<Profile posts={props.state.posts}/>}/>
                        <Route path="news/*" element={<News/>}/>
                        <Route path="music/*" element={<Music/>}/>
                        <Route path="settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
