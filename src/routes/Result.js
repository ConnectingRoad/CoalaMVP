import React from 'react';
import axios from 'axios';
import './Result.css';
import './Result_Loder.css';
import village_bottom from '../img/village_bottom.svg';
import village_top from '../img/village_top.png';
import bar_9 from '../img/bar_9.svg';
import ResultCard from '../components/ResultCard';
import ClassCard from '../components/ClassCard';
import Feedback from '../components/Feedback';
import replay from '../img/replay.svg';
import coalagram from '../img/coalagram_title.png';
import HorizontalScroll from 'react-scroll-horizontal';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            mbti: {},
            userId: {},
            classes: [{title: "", like: false}, {title: "", like: false}, {title: "", like: false}, {title: "", like: false}]
        }
        this.onHeartChanged = this.onHeartChanged.bind(this)
    }

    getMBTI = async (name, sex, answers) => {
        const data = await axios
            .post('/api/mbti/register', {
                name: name,
                sex: sex,
                answers: answers
            })
            .then(response => response.data);
        const mbti = data.mbti;
        const userId = data.userId;
        
        mbti.description = mbti.description.replace(/\\n/g, '\n');
        
        let newClasses = [];

        if (sex === "여") newClasses.push(mbti.classes[7]);
        else newClasses.push(mbti.classes[8]);

        for (var i = 0; i < answers.length; i++) {
            switch (i) {
                case 1:
                    if (answers[i] == 1) newClasses.push(mbti.classes[0]);
                    else newClasses.push(mbti.classes[1]);
                    break;
                case 2:
                    if (answers[i] == 1) newClasses.push(mbti.classes[2]);
                    else newClasses.push(mbti.classes[3]);
                    break;
                case 6:
                    if (answers[i] == 1) newClasses.push(mbti.classes[4]);
                    else if (answers[i] == 2) newClasses.push(mbti.classes[5]);
                    else newClasses.push(mbti.classes[6]);
                    break;
                default:
                    break;
            }
        }
        
        mbti.classes = newClasses;

        setTimeout(() => {
            this.setState({mbti, isLoading: false, userId: userId});
        }, 3000)
    }

    onHeartChanged(classInfo) {
        let newClasses = this.state.classes
        newClasses.splice(classInfo.index, 1, classInfo.data)
        this.setState({classes: newClasses}, this.postLike);
    }

    postLike = async() =>
        await axios.post("/api/users/like", {userId: this.state.userId, classes: this.state.classes})
            .then(res => console.log(res))

    componentDidMount() {
        const {location, history} = this.props;

        if (location.state === undefined) {
            history.push('/');
        } else {
            this.getMBTI(location.state.name, location.state.sex, location.state.answers);
        }
    }

    render() {
        const { isLoading, mbti, userId } = this.state;
        const { location } = this.props;
        const { name } = (location.state === undefined)? { name: "" } : location.state;

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
                                <div className="DNA_cont">
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                    <div className="nucleobase"></div>
                                </div>  
                                <img className="result__progress" alt="result_progress" src={bar_9}/>
                            </div>
                        )
                        : (
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
                                <div className="classes_title">
                                    <p id="title">당신이 좋아할만한 클래스 추천!</p>
                                    <p id="subtitle">취향저격에는 하트 꾹</p>
                                </div>
                                <HorizontalScroll 
                                    className="result__classes"
                                    reverseScroll={true}
                                    style={{ width: "auto", height: "288px", margin: "20px 0 16px 20px"}}>
                                    {mbti.classes.map((c, index) => (
                                        <ClassCard 
                                            key={index}
                                            index={index}
                                            url={c.url}
                                            title={c.title}
                                            image={c.image}
                                            onChange={this.onHeartChanged}/>
                                    ))}
                                </HorizontalScroll>
                                <Feedback 
                                    key={userId}
                                    userId={userId}/>
                                <div className="result__replay" onClick={e => this.props.history.push('/')}>
                                    <span>테스트 다시하기</span>
                                    <img alt="replay" src={replay}/>
                                </div>        
                            </div>
                        )
                }
            </section>
        );
    }
}

export default Result;