import s from './../Dialogs.module.css'

export const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

export type MessagePropsType = {
    message: string
    id: number
}
