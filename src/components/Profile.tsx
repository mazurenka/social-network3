import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src={'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg'}/>

        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New Post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>

        </div>
    </div>
}