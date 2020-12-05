import React, { useState } from 'react'
import './Feedback.css'
import coala_profile from '../img/coala_profile.svg';
import coala_profile_s from '../img/coala_profile_s.svg';
import paper_plane from '../img/paper_plane.svg';
import ClipBoard from 'clipboard'

function FeedBack({ userId }) {
    const [Checks, setChecks] = useState([false, false, false, false, false])

    const handleClickStar = (e) => {
        e.preventDefault()
        let checks = []
        for (var i = 0; i < 5; i++) {
            if (i <= parseInt(e.target.htmlFor.charAt(4))) {
                checks.push(true)
            } else {
                checks.push(false)
            }
        }
        setChecks(checks)
    }

    return (
        <div className="feedback">
            <div className="feedback__header">
                <img alt="coala_profile" src={coala_profile} className="coala__profile"/>
                <a href="https://www.instagram.com/c0ala_official/" target="_blank" rel="noreferrer">c0ala_official</a>
                <img alt="paper_plane" src={paper_plane} className="paper__plane"
                        data-clipboard-text={userId}/>
            </div>
            <div className="chat__insta" id="chat">
                <p>위 아이디를 누르면 인스타에서 결과 풀이를 더<br/>볼 수 있어요!</p>
            </div>
            <div className="chat__plane" id="chat">
                <img alt="paper_plane" src={paper_plane} />
                <p>아이콘을 눌러서 결과를 친구와 공유해 보세요 🙂 </p>
            </div>
            <div className="chat__container">
                <img alt="coala_profile" src={coala_profile_s}/>
                <div className="chat__star" id="chat">
                    <p>테스트가 잘 맞았나요?</p>
                    <div className="review__stars">
                        {[0, 1, 2, 3, 4].map(i => (
                            <div className="review__star">
                                <input type="checkbox" id={"star" + i} checked={Checks[i]}/>
                                <label htmlFor={"star" + i} onClick={handleClickStar}></label>  
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack
