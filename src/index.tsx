import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

type rerenderEntireTreeType = () => void

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = (state: RootStateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    profilePage={state.profilePage}
                    dialogsPage={state.dialogsPage}
                    sidebar={state.sidebar}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

reportWebVitals();

