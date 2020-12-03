import React from 'react';
import './ResultCard.css';
import user_profile from '../img/user_profile.svg';
import coala_1 from '../img/coala_1.svg';
import coala_2 from '../img/coala_2.svg';
import coala_3 from '../img/coala_3.svg';
import coala_4 from '../img/coala_4.svg';
import coala_5 from '../img/coala_5.svg';
import coala_6 from '../img/coala_6.svg';
import coala_7 from '../img/coala_7.svg';
import coala_8 from '../img/coala_8.svg';


function ResultCard({ index, name, description }) {
    const images = [coala_1, coala_2, coala_3, coala_4, coala_5, coala_6, coala_7, coala_8];

    return (
        <div className="result__card">
            <div className="card__header">
                <img alt="user_profile" src={user_profile}/>
                <span>{name}</span>
            </div>
            <div className="coala__container">
                <img alt="coala_img" src={images[index]}/>
            </div>
            <div className="card__description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ResultCard
