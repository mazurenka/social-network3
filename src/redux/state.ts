
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

type ProfilePageType = {
    posts: Array<PostType>
}

type DialogsPageType = {
    dialogs:Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

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
