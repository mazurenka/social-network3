import React from "react";
import s from './Post.module.css'

type PostType = {
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://cdn3.iconfinder.com/data/icons/browser-1-new-filled-outline/128/Browser_-_Filled_Outline_-_20-11-512.png'}/>
            {props.message}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}