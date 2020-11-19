import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';

class Quiz extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        const { name, sex } = location.state;

        if (location.state) {
            return (
                <div className="quiz">
                    {name}{sex}
                </div>
            );
        } else {
            return null;
        } 
    }
}

export default Quiz;