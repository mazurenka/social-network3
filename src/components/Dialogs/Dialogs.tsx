import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from "./Message/Message";

export const Dialogs = (props: any) => {



    let dialogsElements = props.dialogs
        .map((d: DialogsItemPropsType ) => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.messages
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