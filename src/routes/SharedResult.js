import React from 'react';
import axios from 'axios';
import './SharedResult.css';
import ResultCard from '../components/ResultCard';
import replay from '../img/replay.svg';
import coalagram from '../img/coalagram_title.png';
import OpengraphReactComponent from 'opengraph-react';
import ClassCardShared from '../components/ClassCardShared'

const config = require('../config/key');

class SharedResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mbti: {},
            name: "",
            likes: []
        }
    }

    getUser = async (id) => {
        const data = await axios
            .get('/api/users/' + id)
            .then(res => res.data);
        let user = data.user;
        
        if (user.classes.length === 0) {
            user.classes = [{index: 0, like:false}, {index: 0, like:false}, {index: 0, like:false}, {index: 0, like:false}];
        }

        this.getMBTI(user.answers, user.name, user.sex, user.classes)
    }

    getMBTI = async (answers, name, sex, likes) => {
        const data = await axios
            .get('/api/mbti/' + answers.join(''))
            .then(response => response.data);
        const mbti = data.mbti;
        
        mbti.description = mbti.description.replace(/\\n/g, '\n');

        let newClasses = [];

        if (sex === "여") newClasses.push(mbti.classes[7]);
        else newClasses.push(mbti.classes[8]);

        for (var i = 0; i < answers.length; i++) {
            switch (i) {
                case 1:
                    if (answers[i] === 1) newClasses.push(mbti.classes[0]);
                    else newClasses.push(mbti.classes[1]);
                    break;
                case 2:
                    if (answers[i] === 1) newClasses.push(mbti.classes[2]);
                    else newClasses.push(mbti.classes[3]);
                    break;
                case 6:
                    if (answers[i] === 1) newClasses.push(mbti.classes[4]);
                    else if (answers[i] === 2) newClasses.push(mbti.classes[5]);
                    else newClasses.push(mbti.classes[6]);
                    break;
                default:
                    break;
            }
        }
        
        mbti.classes = newClasses;

        this.setState({mbti, name, likes});
    }

    componentDidMount() {
        const { match } = this.props;

        this.getUser(match.params.id);
    }

    render() {
        const { mbti, name, likes } = this.state;

        return (
            <section className="container">
                <div className="result__shared">
                    <header className="result__header">
                        <img alt="title" src={coalagram}/>
                    </header>
                    <ResultCard 
                        key={mbti._id}
                        index={mbti.index}
                        userName={name}
                        coalaName={mbti.name}
                        description={mbti.description}/>
                    <div className="classes_title">
                        <p id="title">당신이 좋아할만한 클래스 추천!</p>
                        <p id="subtitle">취향저격에는 하트 꾹</p>
                    </div>
                    <div className="result__classes">
                        {mbti.classes? (mbti.classes.map((c, index) => (
                            <OpengraphReactComponent
                                key={index}
                                site={c.url}
                                appId={config.opengraphApiKey}
                                onlyFetch={true}
                            >
                                <ClassCardShared 
                                    key={index}
                                    index={index}
                                    url={c.url}
                                    like={likes[index].like}/>
                            </OpengraphReactComponent> 
                        ))): null}
                    </div>
                    <div className="result__replay" onClick={e => this.props.history.push('/')}>
                        <span>테스트 하기</span>
                        <img alt="replay" src={replay}/>
                    </div>        
                </div>
            </section>
        );
    }
}

export default SharedResult;