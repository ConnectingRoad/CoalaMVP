import React from 'react'
import './Feedback.css'
import coala_profile from '../img/coala_profile.svg';
import paper_plane from '../img/paper_plane.svg';

function FeedBack({ userId }) {
    console.log(userId)
    return (
        <div className="feedback">
            <div className="feedback__header">
                <img alt="coala_profile" src={coala_profile} className="coala__profile"/>
                <span>c0ala_official</span>
                <img alt="paper_plane" src={paper_plane} className="paper__plane"/>
            </div>
        </div>
    )
}

export default FeedBack
