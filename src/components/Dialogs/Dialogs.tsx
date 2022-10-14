import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: DialogsPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

type MessagePropsType = {
    message: string
}

type DialogsPropsType = {
    name: string
    id: string
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Andrey'} id={'1'}/>
                <DialogItem name={'Dimych'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Victor'} id={'4'}/>
                <DialogItem name={'Valera'} id={'5'}/>
                <DialogItem name={'Sasha'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo!'}/>
            </div>
        </div>
    )
}