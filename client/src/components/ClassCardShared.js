import React from 'react';
import './ClassCardShared.css';
import heart_on from '../img/heart_on.svg';
import heart_off from '../img/heart_off.svg';

function ClassCardShared(props) {
    return (
        <div className="class__card">
            <a href={props.url} target="_blank" rel="noreferrer"><img className="class__img" alt="class_img" src={props.image}/></a>
            <div className="class__content">
                <a href={props.url} target="_blank" rel="noreferrer">{props.title}</a>
                <img className="class__heart" alt="class_heart" src={props.like? heart_on:heart_off}/>
            </div>
        </div>
    )
}

export default ClassCardShared
