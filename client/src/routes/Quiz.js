import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';
import village_road from '../img/village_road.svg';
import village_bottom from '../img/village_bottom.svg';
import village_top from '../img/village_top.png';
import bar_1 from '../img/bar_1.svg';
import sea_bottom from '../img/sea_bottom.svg';
import sea_top from '../img/sea_top.png';
import sea_surfing from '../img/sea_surfing.svg';
import bar_2 from '../img/bar_2.svg';
import sea_turtle from '../img/sea_turtle.svg';
import bar_3 from '../img/bar_3.svg';
import desert_tear from '../img/desert_tear.svg';
import desert_bottom from '../img/desert_bottom.svg';
import desert_top from '../img/desert_top.png';
import bar_4 from '../img/bar_4.svg';
import desert_activity from '../img/desert_activity.svg';
import bar_5 from '../img/bar_5.svg';
import desert_sand from '../img/desert_sand.svg';
import bar_6 from '../img/bar_6.svg';
import desert_dark_bottom from '../img/desertdark_bottom.svg';
import desert_dark_top from '../img/desertdark_top.png';
import polar_juggling from '../img/polar_juggling.svg';
import bar_7 from '../img/bar_7.svg';
import polar_bottom from '../img/polar_bottom.svg';
import polar_top from '../img/polar_top.png';
import polar_clock from '../img/polar_clock.svg';
import bar_8 from '../img/bar_8.svg';
import arrow_back from '../img/arrow_back.svg'

var bg_gradations = ["linear-gradient(to bottom, #D88089CC, #FFC586CC)", 
"linear-gradient(to bottom, #3B5295CC, #B0D8D9CC)", 
"linear-gradient(to bottom, #3B5295CC, #B0D8D9CC)",
"linear-gradient(to bottom, #4FA6B1CC, #ECE3C0CC)", 
"linear-gradient(to bottom, #4FA6B1CC, #ECE3C0CC)",
"linear-gradient(to bottom, #25002AAA, #3A136AAA, #76A5FFAA)",
"linear-gradient(to bottom, #7285C2CC, #A6C0DFCC, #C1D2E8CC)",
"linear-gradient(to bottom, #7285C2CC, #A6C0DFCC, #C1D2E8CC)"];
var bg_top_images = [village_top, sea_top, sea_top, desert_top, desert_top, desert_dark_top, polar_top, polar_top];
var bg_bottom_images = [village_bottom, sea_bottom, sea_bottom, desert_bottom, desert_bottom, desert_dark_bottom, polar_bottom, polar_bottom];
var images = [village_road, sea_surfing, sea_turtle, desert_tear, desert_activity, desert_sand, polar_juggling, polar_clock];
var texts = ["두 갈래 길에 들어선 코알라\n이정표가 없다!\n이때 당신의 선택은?",
"바다에 도착했다\n함께 서핑하러 가자고 제안하는 거북이\n이때 당신의 반응은?",
"거북이가 200년 산 경험을 살려 여러\n기술 중에 한 가지를 알려준다고 한다\n이때 당신의 선택은?",
"사막에 도착한 코알라\n친구와 싸워 울고 있는 사막 여우가 있다\n이때 당신이 건넬 말은?",
"친해진 사막 여우와\n특별한 액티비티를 체험해보려고 한다\n이때 당신의 선택은?",
"잠을 자기 위해 굴을 파야 하는 당신\n사막 여우가 굴 파는 방법을 알려주었다\n이때 당신의 다음 행동은?",
"펭귄 마을에 도착한 당신!\n펭귄들이 반겨주며 같이 놀자고 한다\n당신은 무엇을 하고 싶은가?",
"어느새 저녁이 되었다\n펭귄들이 재밌었다며 더 놀자고\n제안하는데 이때 당신의 반응은?"];
var answers1 = ["동물들이 어떤 길로 많이 갔는지\n그 흔적들을 찾아본다",
"그래! 나도 같이 할래!", "재미 없지만 코알라 마을에 가서\n돈을 벌 수 있는 기술",
"무슨 일이야? 왜 싸웠는데?", "나만의 특별한 경험!\n사막 오지 탐험",
"혹시 모르니 사막 여우가\n알려준 방법 그대로 굴을 판다", "눈썰매 타기",
"아 진짜 재밌었다! 그래 더 놀자!"];
var answers2 = ["'왠지 이쪽 길이 맞을 것 같아'\n감으로 찍어서 간다",
"아니야~ 난 앉아서 햇볕 쐬고 있을게\n조용히 선글라스를 낀다",
"돈을 벌 수는 없지만\n흥미로운 기술", "헐ㅜㅜ 괜찮아? 너무 속상하겠다...",
"여행의 하이라이트!\n 열기구 타기", "사막 여우의 방법에\n나만의 느낌을 추가해서 굴을 판다",
"기념품 만들기", "시간이 늦어서\n이제 좀 쉬러갈게, 안녕~"];
var progress_images = [bar_1, bar_2, bar_3, bar_4, bar_5, bar_6, bar_7, bar_8];
var button_colors = ["#E6596A", "#7388C2", "#7388C2", "#60A6AF", "#60A6AF", "#59375D", "#7A83E0", "#7A83E0"];

class Quiz extends React.Component {
    id = 0
    state = {
        bg_gradation: bg_gradations[0],
        bg_top_image: bg_top_images[0],
        bg_bottom_image: bg_bottom_images[0],
        image: images[0],
        text: texts[0],
        answer1: answers1[0],
        answer2: answers2[0],
        answer3_visibility: "collapse",
        progress_image: progress_images[0],
        button_color: button_colors[0],
        answers: [],
    }

    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    handleClick = (e) => {
        if (this.id !== 7) {
            e.preventDefault();
            
            let newAnswers = this.state.answers;
            if (this.id !== 4 && this.id !== 5) newAnswers.push(e.target.id);
            else newAnswers.push("0");

            this.id++;

            this.setState({
                bg_gradation: bg_gradations[this.id],
                bg_top_image: bg_top_images[this.id],
                bg_bottom_image: bg_bottom_images[this.id],
                image: images[this.id],
                text: texts[this.id],
                answer1: answers1[this.id],
                answer2: answers2[this.id],
                answer3_visibility: this.id === 6? "visible" : "collapse",
                progress_image: progress_images[this.id],
                button_color: button_colors[this.id],
                answers: newAnswers,
            })
        } else {
            let newAnswers = this.state.answers;
            newAnswers.push(e.target.id);
        }
    }

    handleBack = e => {
        const { history } = this.props;

        if (this.id === 0) {
            history.push('/start')
        } else {
            e.preventDefault();
            
            let newAnswers = this.state.answers;
            newAnswers.pop();

            this.id--;

            this.setState({
                bg_gradation: bg_gradations[this.id],
                bg_top_image: bg_top_images[this.id],
                bg_bottom_image: bg_bottom_images[this.id],
                image: images[this.id],
                text: texts[this.id],
                answer1: answers1[this.id],
                answer2: answers2[this.id],
                answer3_visibility: this.id === 6? "visible" : "collapse",
                progress_image: progress_images[this.id],
                button_color: button_colors[this.id],
                answers: newAnswers,
            })
        }
        console.log(this.state.answers)
    }

    render() {
        const { location } = this.props;
        const { name, sex } = (location.state === undefined)? { name: "", sex: "" } : location.state;
        let { bg_gradation, bg_top_image, bg_bottom_image, image, text, answer1, answer2, answer3_visibility,
            progress_image, button_color, answers } = this.state;

        if (location.state) {
            return (
                <div className="quiz" style={ {background: bg_gradation} }>
                    <img className="quiz__bg" id="top" alt="quiz_bg_top" src={bg_top_image}/>
                    <img className="quiz__bg" id="bottom" alt="quiz_bg_bottom" src={bg_bottom_image}/>
                    <img className="quiz__back" alt="quiz_back" src={arrow_back} onClick={this.handleBack} />
                    <div className="quiz__card">
                        <img className="quiz__img" alt="quiz_img" src={ image }/>
                        <div className="quiz__text">
                            <p>{ text }</p>
                        </div>
                        <Link className="quiz__answer1" id="1" to={{
                                pathname: '/result',
                                state: { name, sex, answers }
                        }} onClick={this.handleClick}
                        style={ {backgroundColor: button_color} }>{ answer1 }</Link>
                        <Link className="quiz__answer2" id="2" to={{
                                pathname: '/result',
                                state: { name, sex, answers }
                        }} onClick={this.handleClick}
                        style={ {backgroundColor: button_color} }>{ answer2 }</Link>
                        <Link className="quiz__answer3" id="3" onClick={this.handleClick}
                        style={ {backgroundColor: button_color, visibility: answer3_visibility} }
                        to="/">얼음 체스 두기</Link>
                    </div>
                    <img className="quiz__progress" alt="quiz_progress" src={progress_image}/>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Quiz;