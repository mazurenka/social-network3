import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PostType} from "./components/Profile/MyPosts/Post/Post";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let dialogs = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Dimych"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Victor"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Sasha"},
]
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo!"},
]

let posts: Array<PostType> = [
    {id: 1, message: 'Hi, how are you', likesCount: 15},
    {id: 2, message: 'My first post', likesCount: 20},
]

root.render(
    <React.StrictMode>
        <App
            dialogs={dialogs}
            messages={messages}
            posts={posts}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
