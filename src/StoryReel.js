import React from 'react';
import './StoryReel.css';

import profilePic from './assets/profilePic-1.jpg';
import profilePic2 from './assets/profilePic-7.jpg';
import profilePic8 from './assets/profilePic-8.jpg';
import profilePic6 from './assets/profilePic-6.jpg';

import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';

import Story from './Story'


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image={pic4}
                profileSrc={profilePic}
                title="Limp Bizkit"
            />

            <Story
                image={pic1}
                profileSrc={profilePic6}
                title="Kolade Olasade"
            />

            <Story
                image={pic3}
                profileSrc={profilePic2}
                title="John Doe"
            />

            <Story
                image={pic2}
                profileSrc={profilePic8}
                title="Hajiya Bilkisu"
            />

        </div>
    )
}

export default StoryReel
