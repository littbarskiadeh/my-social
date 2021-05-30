import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

import profilePic4 from './assets/profilePic-4.jpg';
import pic5 from './assets/profilePic-5.jpg';


function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic={profilePic4}
                message="It works!"
                timestamp="this is timestamp"
                username="@Jon"
                image={pic5}
            />

            <Post
                profilePic={profilePic4}
                message="Post 2!"
                timestamp="this is timestamp"
                username="@User"
            />
            <Post />
            <Post />

        </div>
    )
}

export default Feed
