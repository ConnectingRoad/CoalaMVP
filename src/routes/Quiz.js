import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';
import village_road from '../img/village_road.png'
import village_bg from '../img/village_bg.png'
import sea_bg from '../img/sea_bg.png'
import sea_surfing from '../img/sea_surfing.png'

var bg_images = [village_bg, sea_bg];
var images = [village_road, sea_surfing];
var texts = ["두 갈래 길에 들어선 코알라\n이정표가 없다! 이때 당신의 선택은?",
"바다에 도착했다\n함께 서핑하러 가자고 제안하는 거북이\n이때 당신의 반응은?"];
var answers1 = ["동물들이 어떤 길로 많이 갔는지\n그 흔적들을 찾아본다",
"그래! 나도 같이 탈래!"];
var answers2 = ["'왠지 이쪽 길이 맞을 것 같아'\n감으로 찍어서 간다",
"아니야~ 난 앉아서 햇볕 쐬고 있을게~\n조용히 선글라스를 낀다"];
var progress_images = ["sdfsdf"];
var button_colors = [];

class QuizCard extends React.Component {
    id = 0
    state = {
        bg_image: bg_images[0],
        image: images[0],
        text: texts[0],
        answer1: answers1[0],
        answer2: answers2[0],
        answer3_visiblility: "gone",
        progress_image: progress_images[0],
        answers: [],
    }

    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    handleClick = (e) => {
        if (this.id !== 8) {
            e.preventDefault();
            let newAnswers = this.state.answers;
            newAnswers.push(e.target.id);
            console.log(newAnswers);
            console.log(e.target.id);
            this.id++;
            this.setState({
                bg_image: bg_images[this.id],
                image: images[this.id],
                text: texts[this.id],
                answer1: answers1[this.id],
                answer2: answers2[this.id],
                answers: newAnswers,
            })
        }
    }

    render() {
        const { location } = this.props;
        const { name, sex } = (location.state === undefined)? { name: "", sex: "" } : location.state;
        let { bg_image, image, text, answer1, answer2, answers } = this.state;

        if (location.state) {
            return (
                <div className="quiz">
                    <img className="quiz__bg" alt="quiz_bg" src={bg_image}/>
                    <div className="quiz__card">
                        <img className="quiz__img" alt="quiz_img" src={ image }/>
                        <div className="quiz__text">
                            <p>{ text }</p>
                        </div>
                        <Link className="quiz__answer1" id="1" to={{
                                pathname: '/result',
                                state: { name, sex, answers }
                        }} onClick={this.handleClick}><p id="1">{ answer1 }</p></Link>
                        <Link className="quiz__answer2" id="2" to={{
                                pathname: '/result',
                                state: { name, sex, answers }
                        }} onClick={this.handleClick}><p id="2">{ answer2 }</p></Link> 
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default QuizCard;