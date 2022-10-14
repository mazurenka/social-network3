import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}