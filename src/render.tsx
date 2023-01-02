import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: RootStateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    profilePage={state.profilePage}
                    dialogsPage={state.dialogsPage}
                    sidebar={state.sidebar}
                    addPost={addPost}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();
