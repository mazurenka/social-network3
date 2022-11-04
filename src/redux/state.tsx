import {DialogsItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {PostType} from "../components/Profile/MyPosts/Post/Post";

export type StateType = {
    dialogs: Array<DialogsItemPropsType>
    messages: Array<MessagePropsType>
    posts: Array<PostType>
}

export let state: StateType = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Dimych"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Sasha"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo!"},
    ],
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
}
