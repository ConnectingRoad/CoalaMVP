import React from 'react';
import './QuizCard.css';
import { Link } from 'react-router-dom';
import village_road from '../img/village_road.png'

var bg_images = ["df", "dsf"];
var images = [village_road, village_road];
var texts = ["두 갈래 길에 들어선 코알라 이정표가 없다! 이때 당신의 선택은?",
            " dsfds"];
var answers1 = ["df", "DSfd"];
var answers2 = ["sdf", "dsfds"];

class QuizCard extends React.Component {
    id = 0
    state = {
        bg_image: bg_images[0],
        image: images[0],
        text: texts[0],
        answer1: answers1[0],
        answer2: answers2[0],
        answer3: "sdf",
        answers: [],
    }

    handleClick = (e) => {
        if (this.id !== 8) {
            e.preventDefault();
            const newAnswers = this.state.answers;
            newAnswers.push(1);
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
        let { image, text, answer1, answer2, answer3 } = this.state; 

        return (
            <div className="quiz__card">
                <img className="quiz__img" alt="quiz_img" src={ image }/>
                <div className="quiz__text">
                    <p>{ text }</p>
                </div>
                <Link className="quiz__answer1" to={{
                        pathname: '/loading',
                        state: {  }
                }} onClick={this.handleClick}><p>{ answer1 }</p></Link> 
            </div>
        )
    }
}

export default QuizCard;