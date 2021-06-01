import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

import profilePic4 from './assets/profilePic-4.jpg';
import pic5 from './assets/profilePic-5.jpg';
import pic4 from './assets/profilePic-4.jpg';
import pic2 from './assets/profilePic-2.jpg';


import db from "./firebase";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // load posts from firestore
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map((doc) => (
                    { id: doc.id, data: doc.data() }
                )))
            ))
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp * 1000}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            <Post
                profilePic={profilePic4}
                message="It works!"
                timestamp="this is timestamp"
                username="@Jon"
                image={pic5}
            />
            <Post />
        </div>
    )
}

export default Feed
