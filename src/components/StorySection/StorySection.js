import React from 'react';
import './storySection.css';
import chevronRight from './assets/chevron-right.svg';

const StorySection = () => {
    return(
        <section className="story-section">
            <div>
                <h1 className="h1">FitnessBody,<br/> the beggining</h1>
                <p className="p">We combine state of the arts fitness experts and video training with an amazing attention to detail to bring
                    You a new training experience that 
                    You have never seen before to increase 
                    Your chance to succeed in training.</p>
            </div>
            <div>
                <a className="read-story-link" href="/">
                    Full story
                    <img class="chevron-right" src={chevronRight}></img>
                </a>
            </div>
        </section>
    )
}

export default StorySection;