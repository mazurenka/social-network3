import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from "./Message/Message";

export const Dialogs = () => {

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
    let dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages
        .map((m) => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}