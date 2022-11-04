import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from "./Message/Message";
import {RootStateType} from "../../redux/state";
import React from "react";

export type DialogsPropsType = {
    state: RootStateType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogsPage.dialogs
        .map((d: DialogsItemPropsType) => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.dialogsPage.messages
        .map((m: MessagePropsType) => <Message message={m.message} id={m.id}/>)

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