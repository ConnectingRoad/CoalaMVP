import React from 'react';
import axios from 'axios';
import './Result.css';
import village_bottom from '../img/village_bottom.svg';
import village_top from '../img/village_top.png';
import bar_5 from '../img/bar_5.svg';

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
            .then(response => response.data.mbti);
            
        setTimeout(() => {
            this.setState({mbti, isLoading: false});
        }, 3000)
    }

    componentDidMount() {
        const {location, history} = this.props;

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
                                <img className="result__bg" id="top" alt="result_bg_top" src={village_top}/>
                                <img className="result__bg" id="bottom" alt="result_bg_bottom" src={village_bottom}/>
                                <div className="result__text">
                                    <p>펭귄들과 작별 후 코알라는<br/>
                                    자신의 마을로 돌아가며 생각한다.<br/><br/>

                                    '다양한 세계를 탐험하며<br/>
                                    나에 대해 조금은 알 거 같아'<br/><br/>
                                    
                                    나라는 코알라는 말이야...
                                    </p>
                                </div>  
                                <img className="result__progress" alt="result_progress" src={bar_5}/>
                            </div>
                        )
                        : (
                            <div className="result__finish">
                                { mbti.type }
                            </div>
                        )
                }
            </section>
        );
    }
}

export default Result;