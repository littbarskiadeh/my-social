import React from 'react';
import './StoryReel.css';

import profilePic from './assets/profilePic-1.jpg';
import profilePic2 from './assets/profilePic-2.jpg';
import profilePic3 from './assets/profilePic-3.jpg';
import profilePic4 from './assets/profilePic-4.jpg';
import profilePic5 from './assets/profilePic-5.jpg';
import profilePic6 from './assets/profilePic-6.jpg';

import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';
import pic6 from './assets/pic6.jpg';


import Story from './Story'


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image={pic1}
                profileSrc={profilePic}
                title="Limp Bizkit"
            />

            <Story
                image={pic2}
                profileSrc={profilePic2}
                title="Oluwakolade Olasade"
            />

            <Story
                image={pic3}
                profileSrc={profilePic3}
                title="Amit Singh"
            />

            <Story
                image={pic4}
                profileSrc={profilePic4}
                title="Heather Snow"
            />
            <Story
                image={pic5}
                profileSrc={profilePic5}
                title="Jon Westeros"
            />
            {/* <Story
                image={pic6}
                profileSrc={profilePic6}
                title="Ming Sun"
            /> */}
        </div>
    )
}

export default StoryReel
