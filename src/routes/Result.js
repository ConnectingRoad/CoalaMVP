import React from 'react';
import axios from 'axios';
import './Result.css';
import intro_bg from '../img/intro_bg.png';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            mbti: {}
        }
    }

    getMBTI = async (name, sex, answers) => {
        const mbti = await axios
            .post('/api/mbti/register', {
                name: name,
                sex: sex,
                answers: answers
            })
            .then(response => console.log(response.data));
        
        setTimeout(() => {
            this.setState({mbti, isLoading: false});
        }, 3000)
    }

    componentDidMount() {
        const {location, history} = this.props;
        console.log(location);
        if (location.state === undefined) {
            history.push('/');
        } else {
            this.getMBTI(location.state.name, location.state.sex, location.state.answers);
        }
    }

    

    render() {
        const {isLoading, mbti} = this.state;

        return (
            <section className="container">
                {
                    isLoading
                        ? (
                            <div className="result">
                                <img className="result__bg" alt="result_bg" src={intro_bg}/>
                                <span className="loader__text">Loading...</span>
                            </div>
                        )
                        : (
                            <div className="movies">
                                
                            </div>
                        )
                }
            </section>
        );
    }
}

export default Result;