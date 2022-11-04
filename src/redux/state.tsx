import {PostType} from "../components/Profile/MyPosts/Post/Post";

type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
}

type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 15},
            {id: 2, message: 'My first post', likesCount: 20},
        ],
    },
    messagesPage: {
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
    }
}
