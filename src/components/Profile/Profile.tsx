import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/state";

type ProfilePropsType = {
    newPostText: string
    state: RootStateType
    addPost: () => void //postMessage: string
    updateNewPostText: (newText: string | undefined) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}