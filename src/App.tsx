import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsPageType, ProfilePageType, RootStateType, SidebarType, state} from "./redux/state";

type RootStatePropsType = {
    newPostText: string
    sidebar: SidebarType
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    state: RootStateType
    addPost: () => void //postMessage: string
    updateNewPostText: (newText: string | undefined) => void
}

const App: React.FC<RootStatePropsType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="dialogs/*" element={<Dialogs state={state}/>}/>
                    <Route path="profile/*" element={<Profile state={state}
                                                              addPost={props.addPost}
                                                              newPostText={props.newPostText}
                                                              updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path="news/*" element={<News/>}/>
                    <Route path="music/*" element={<Music/>}/>
                    <Route path="settings/*" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
