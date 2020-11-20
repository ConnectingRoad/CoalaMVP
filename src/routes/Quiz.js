import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';
import intro_bg from '../img/intro_bg.png';
import QuizCard from '../components/QuizCard';

class Quiz extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        const { name, sex } = (location.state === undefined)? { name: "", sex: "" } : location.state;

        if (location.state) {
            return (
                <div className="quiz">
                    <img className="quiz__bg" alt="quiz_bg" src={intro_bg}/>
                    <QuizCard />
                </div>
            );
        } else {
            return null;
        } 
    }
}

export default Quiz;