import React from 'react';
import './Cover.css';
import cover from '../img/cover_coala.svg';

function Cover(props) {
    
    const handleClick = (e) => {
        e.preventDefault();
        props.history.push('/start');
    }

    return (
        <div className="cover">
            <img alt="cover" src={cover}/>
            <p id="p1">나는 어떤 코알라일까?</p>
            <p id="p2">퀴즈로 알아보는 나만의 취미생활</p>
            <button type="button" onClick={handleClick}>테스트 시작하기</button>
        </div>
    )
}

export default Cover
