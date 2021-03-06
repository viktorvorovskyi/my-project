import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    );
}
export default Profile;