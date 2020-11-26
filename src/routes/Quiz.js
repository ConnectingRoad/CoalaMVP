import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';
import village_road from '../img/village_road.png';
import village_bottom from '../img/village_bottom.png';
import village_top from '../img/village_top.png';
import bar_1 from '../img/bar_1.png';
import sea_bg from '../img/sea_bg.png';
import sea_surfing from '../img/sea_surfing.png';
import bar_2 from '../img/bar_2.png';
import sea_turtle from '../img/sea_turtle.png';
import desert_tear from '../img/desert_tear.png';
import bar_3 from '../img/bar_3.png';
import desert_activity from '../img/desert_activity.png';
import desert_sand from '../img/desert_sand.png';
import polar_juggling from '../img/polar_juggling.png';
import polar_clock from '../img/polar_clock.png';
import bar_4 from '../img/bar_4.png';

var bg_gradations = ["linear-gradient(to bottom, #D88089CC, #FFC586CC)", 
"linear-gradient(to bottom, #3B5295CC, #B0D8D9CC)", 
"linear-gradient(to bottom, #3B5295CC, #B0D8D9CC)",
"linear-gradient(to bottom, #4FA6B1CC, #ECE3C0CC)", 
"linear-gradient(to bottom, #4FA6B1CC, #ECE3C0CC)",
"linear-gradient(to bottom, #25002ACC, #3A136ACC, #76A5FFCC)",
"linear-gradient(to bottom, #7285C2CC, #A6C0DFCC, #C1D2E8CC)",
"linear-gradient(to bottom, #7285C2CC, #A6C0DFCC, #C1D2E8CC)"];
var bg_top_images = [village_top, village_top, village_top, village_top, village_top, village_top, village_top, village_top];
var bg_bottom_images = [village_bottom, village_bottom, village_bottom, village_bottom, village_bottom, village_bottom, village_bottom, village_bottom];
var images = [village_road, sea_surfing, sea_turtle, desert_tear, desert_activity, desert_sand, polar_juggling, polar_clock];
var texts = ["두 갈래 길에 들어선 코알라\n이정표가 없다! 이때 당신의 선택은?",
"바다에 도착했다\n함께 서핑하러 가자고 제안하는 거북이\n이때 당신의 반응은?",
"거북이가 200년 산 경험을 살려 여러\n기술 중에 한 가지를 알려준다고 한다\n이때 당신의 선택은?",
"사막에 도착한 코알라\n친구와 싸워 울고 있는 사막 여우가 있다\n이때 당신이 건넬 말은?",
"친해진 사막 여우와\n특별한 액티비티를 체험해보려고 한다\n이때 당신의 선택은?",
"잠을 자기 위해 굴을 파야 하는 당신\n사막 여우가 굴 파는 방법을 알려주었다\n이때 당신의 다음 행동은?",
"펭귄 마을에 도착한 코알라\n새로운 동물을 본 펭귄들이 당신을\n반겨주며 같이 놀자고 한다\n당신은 무엇을 하고 싶은가?",
"어느새 저녁이 되었다\n펭귄들이 재밌었다며 더 놀자고\n제안하는데 이때 당신의 반응은?"];
var answers1 = ["동물들이 어떤 길로 많이 갔는지\n그 흔적들을 찾아본다",
"그래! 나도 같이 탈래!", "재미 없지만 코알라 마을에 가서\n돈을 벌 수 있는 기술",
"무슨 일이야? 왜 싸웠는데?", "남들이 많이 하지 않지만\n특이한 코브라 길들이기",
"혹시 모르니 사막 여우가\n알려준 방법 그대로 굴을 판다", "썰매타기",
"아 진짜 재밌었다! 그래 더 놀자!"];
var answers2 = ["'왠지 이쪽 길이 맞을 것 같아'\n감으로 찍어서 간다",
"아니야~ 난 앉아서 햇볕 쐬고 있을게~\n조용히 선글라스를 낀다",
"돈을 벌 수는 없지만\n흥미로운 기술", "헐ㅜㅜ 괜찮아? 너무 속상하겠다...",
"가장 인기 있는 열기구 타기 체험", "사막 여우의 방법에\n나만의 느낌을 추가해서 굴을 판다",
"눈사람 만들기", "시간이 늦어서\n이제 좀 쉬러갈게, 안녕~"];
var progress_images = [bar_1, bar_2, bar_2, bar_3, bar_3, bar_3, bar_4, bar_4];
var button_colors = ["#E6596A", "#7388C2", "#7388C2", "#60A6AF", "#60A6AF", "#59375D", "#7A83E0", "#7A83E0"];

class QuizCard extends React.Component {
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
        answers_height: "11%",
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
            newAnswers.push(e.target.id);
            this.id++;
            this.setState({
                bg_gradation: bg_gradations[this.id],
                bg_top_image: bg_top_images[this.id],
                bg_botton_image: bg_bottom_images[this.id],
                image: images[this.id],
                text: texts[this.id],
                answer1: answers1[this.id],
                answer2: answers2[this.id],
                answer3_visibility: this.id === 6? "visible" : "collapse",
                answers_height: this.id === 6? "9%" : "11%",
                progress_image: progress_images[this.id],
                button_color: button_colors[this.id],
                answers: newAnswers,
            })
        } else {
            let newAnswers = this.state.answers;
            newAnswers.push(e.target.id);
        }
    }

    render() {
        const { location } = this.props;
        const { name, sex } = (location.state === undefined)? { name: "", sex: "" } : location.state;
        let { bg_gradation, bg_top_image, bg_bottom_image, image, text, answer1, answer2, answer3_visibility, answers_height,
            progress_image, button_color, answers } = this.state;

        if (location.state) {
            return (
                <div className="quiz" style={ {background: bg_gradation} }>
                    <img className="quiz__bg" id="top" alt="quiz_bg_top" src={bg_top_image}/>
                    <img className="quiz__bg" id="bottom" alt="quiz_bg_bottom" src={bg_bottom_image}/>
                    <div className="quiz__card">
                        <img className="quiz__img" alt="quiz_img" src={ image }/>
                        <div className="quiz__text">
                            <p>{ text }</p>
                        </div>
                        <Link className="quiz__answer1" id="1" to={{
                                pathname: '/result',
                                state: { name, sex, answers }
                        }} onClick={this.handleClick}
                        style={ {backgroundColor: button_color, height: answers_height} }><p id="1">{ answer1 }</p></Link>
                        <Link className="quiz__answer2" id="2" to={{
                                pathname: '/result',
                                state: { name, sex, answers }
                        }} onClick={this.handleClick}
                        style={ {backgroundColor: button_color, height: answers_height} }><p id="2">{ answer2 }</p></Link>
                        <Link className="quiz__answer3" onClick={this.handleClick}
                        style={ {backgroundColor: button_color, visibility: answer3_visibility, height: answers_height} }><p id="3">펭귄어 배우기</p></Link>
                    </div>
                    <img className="quiz__progress" alt="quiz_progress" src={progress_image}/>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default QuizCard;