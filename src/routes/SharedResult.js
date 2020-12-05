import React from 'react';
import axios from 'axios';
import './SharedResult.css';
import ResultCard from '../components/ResultCard';
import replay from '../img/replay.svg';
import coalagram from '../img/coalagram_title.png';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mbti: {},
            name: ""
        }
    }

    getUser = async (id) => {
        const data = await axios
            .get('/api/users/' + id)
            .then(res => res.data);
        const user = data.user;
        
        this.getMBTI(user.answers, user.name)
    }

    getMBTI = async (answers, name) => {
        const data = await axios
            .get('/api/mbti/' + answers.join(''))
            .then(response => response.data);
        const mbti = data.mbti;
        
        mbti.description = mbti.description.replace(/\\n/g, '\n');

        this.setState({mbti, name});
    }

    componentDidMount() {
        const { match } = this.props;

        this.getUser(match.params.id);
    }

    render() {
        const { mbti, name } = this.state;

        return (
            <section className="container">
                <div className="result__finish">
                    <header className="result__header">
                        <img alt="title" src={coalagram}/>
                    </header>
                    <ResultCard 
                        key={mbti._id}
                        index={mbti.index}
                        userName={name}
                        coalaName={mbti.name}
                        description={mbti.description}/>
                    <div className="result__replay" onClick={e => this.props.history.push('/')}>
                        <span>테스트 하기</span>
                        <img alt="replay" src={replay}/>
                    </div>        
                </div>
            </section>
        );
    }
}

export default Result;