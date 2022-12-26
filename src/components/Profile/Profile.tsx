import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/state";

type ProfilePropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts}
                     addPost={props.addPost}/>
        </div>
    )
}