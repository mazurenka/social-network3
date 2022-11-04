import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
