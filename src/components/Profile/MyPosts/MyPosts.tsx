import React from "react";
import s from './MyPosts.module.css'
import {Post, PostType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p: PostType) => <Post id={p.id}
                                                               message={p.message}
                                                               likesCount={p.likesCount}
    />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}