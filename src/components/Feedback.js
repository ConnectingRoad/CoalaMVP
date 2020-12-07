import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Feedback.css'
import coala_profile from '../img/coala_profile.svg';
import coala_profile_s from '../img/coala_profile_s.svg';
import paper_plane from '../img/insta_share.svg';
import TextareaAutosize from 'react-textarea-autosize';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FeedBack({ userId }) {
    const [Checks, setChecks] = useState([false, false, false, false, false])
    const [Score, setScore] = useState(0)
    const [Text, setText] = useState("")
    const [FeedbackText, setFeedbackText] = useState("")
    const [Display, setDisplay] = useState(["none", "none", "none"])
    const [Visibility, setVisibility] = useState(["visible", "hidden"])
    const textRef = React.createRef();

    const handleChangeStar = e => {
        let checks = [false, false, false, false, false];
        const score = parseInt(e.target.id.charAt(4)) + 1;

        for (var i = 0; i < score; i++) {
            checks.splice(i, 1, true);
        }

        setChecks(checks);
        setScore(score);
    }

    useEffect(() => {
        async function postFeedback() {
            await axios.post("/api/users/feedback", {userId: userId, feedback:{score:Score, text:FeedbackText}})
            .then(res => console.log(res));
        }
        postFeedback();
    }, [userId, Score, FeedbackText])

    const handleChangeText = e => {
        if (e.target.value.length <= 50) {
            setText(e.target.value)
        } else {
            alert("최대 50자까지 작성 가능합니다")
        }
    }

    const handleSubmit = e => {
        if (Text === "") {
            setDisplay(["flex", "none", "none"]);
            setVisibility(["hidden", "visible"]);
        } else {
            setFeedbackText(Text);

            let newDisplay = Display;
            newDisplay[1] = "flex";
            newDisplay[2] = "flex";
            setDisplay(newDisplay);

            setVisibility(["hidden", "hidden"]);

            setText("");

            e.target.disabled = true;
            e.target.style.color = "gray";
            textRef.current.disabled = true;
            textRef.current.placeholder = "(☞ﾟヮﾟ)☞ Thank you❤"
        }
    }

    const notify = () => toast("클립보드에 복사되었습니다", {
        autoClose: 2000
    });

    return (
        <div className="feedback">
            <div className="feedback__header">
                <a href="https://www.instagram.com/c0ala_official/" target="_blank" rel="noreferrer" id="img">
                    <img alt="coala_profile" src={coala_profile} className="coala__profile"/>
                </a>
                <a id="text" href="https://www.instagram.com/c0ala_official/" target="_blank" rel="noreferrer">c0ala_official</a>
                <CopyToClipboard text={"http://ec2-3-34-152-127.ap-northeast-2.compute.amazonaws.com:3000/CoalaMVP#/result/" + userId}
                    onCopy={notify}>
                    <img alt="paper_plane" src={paper_plane} className="paper__plane"/>
                </CopyToClipboard>
                <ToastContainer/>
            </div>
            <div className="chat__insta" id="chat">
                <p>위 아이디를 누르면 인스타에서 결과 풀이를 더 볼 수 있어요!</p>
            </div>
            <div className="chat__plane" id="chat">
                <img alt="paper_plane" src={paper_plane} />
                <p>을 눌러 결과를 공유해 보세요🙂</p>
            </div>
            <div className="chat__container">
                <div className="chat__container__star">
                <img alt="coala_profile" src={coala_profile_s} id="profile1" style={{visibility: Visibility[0]}}/>
                    <div className="chat__star" id="chat">
                        <p>테스트가 잘 맞았나요?</p>
                        <div className="review__stars">
                            {[0, 1, 2, 3, 4].map(i => (
                                <div key={"div" + i} className="review__star">
                                    <input key={"star" + i} type="checkbox" id={"star" + i} checked={Checks[i]}
                                    onChange={handleChangeStar}/>
                                    <label key={"label" + i} htmlFor={"star" + i}></label>  
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="chat__score" style={{display: Display[0]}}>
                    <img alt="coala_profile" src={coala_profile_s} id="profile2" style={{visibility: Visibility[1]}}/>
                    <div className="no__score" id="chat"><p>내용을 입력해주세요!🙂</p></div>                                                                     
                </div>
                <div className="chat__success__me" style={{display: Display[1]}}>
                    <div className="feedback__success__me"><p>{FeedbackText}</p></div>                                                                     
                </div>
                <div className="chat__success" style={{display: Display[2]}}>
                    <img alt="coala_profile" src={coala_profile_s} id="profile3"/>
                    <div className="feedback__success" id="chat"><p>소중한 의견 감사합니다!</p></div>                                                                     
                </div>
            </div>
            <div className="feedback__input">
                <TextareaAutosize className="input__text" minRows="1" maxRows="3"
                    placeholder="평을 남겨주세요..." value={Text} onChange={handleChangeText} ref={textRef}/>
                <button type="submit" onClick={handleSubmit}>보내기</button>
            </div>
        </div>
    )
}

export default FeedBack
