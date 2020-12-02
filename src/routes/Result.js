import React from 'react';
import './Result.css';
import intro_bg from '../img/intro_bg.png';

class Result extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        const { name, sex, answers } = (location.state === undefined)? { name: "", sex: "", answers: [] } : location.state;

        if (location.state) {
            return (
                <div className="result">
                    <img className="result__bg" alt="result_bg" src={intro_bg}/>
                <div>{answers}</div>
                </div>
            );
        } else {
            return null;
        } 
    }
}

export default Result;