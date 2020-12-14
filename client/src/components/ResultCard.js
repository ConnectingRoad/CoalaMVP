import React from 'react';
import './ResultCard.css';
import user_profile from '../img/user_profile.svg';


function ResultCard({ image, userName, coalaName, description }) {

    return (
        <div className="result__card">
            <div className="card__header">
                <img alt="user_profile" src={user_profile}/>
                <span>{userName}</span>
            </div>
            <div className="coala__container">
                <img alt="coala_img" src={image}/>
            </div>
            <div className="card__description">
                <p>{[description.substring(0, description.indexOf("#")), <span key={1}>#{coalaName}</span>,
                        description.substring(description.indexOf("#") + coalaName.length + 1, description.length)]}</p>
            </div>
        </div>
    )
}

export default ResultCard
