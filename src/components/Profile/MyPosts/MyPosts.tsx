import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ]

    let postsElements = posts
        .map(p => <Post id={p.id}
                        message={p.message}
                        likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}