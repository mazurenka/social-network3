import {rerenderEntireTree} from "../render";


type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 15},
            {id: 2, message: 'My first post', likesCount: 20},
        ],
        newPostText: "type something",
    },
    dialogsPage: {
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
    },
    sidebar: {}
}

// @ts-ignore
window.state = state

export let addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string | undefined) => {
    if (newText != null) {
        state.profilePage.newPostText = newText
    }
    rerenderEntireTree(state)
}
