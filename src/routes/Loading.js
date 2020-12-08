import React from 'react';
import './Loading.css';
import intro_bg from '../img/intro_bg.png';
import { Link } from 'react-router-dom';

class Loading extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            postposition: "는"
        }
    }
    
    checkBatchimEnding = (word) => {
        if (typeof word !== 'string') return null;
       
        var lastLetter = word[word.length - 1];
        var uni = lastLetter.charCodeAt(0);
       
        if (uni < 44032 || uni > 55203) return null;
       
        return (uni - 44032) % 28 != 0;
    }

    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        } else{
            const name = location.state.name;
        
            if (this.checkBatchimEnding(name)) this.setState({postposition:"은"});
        }
    }

    render() {
        const { location } = this.props;
        const { name, sex } = (location.state === undefined)? { name: "", sex: "" } : location.state;

        if (location.state) {
            return (
                <div className="loading">
                    <img className="loading__bg" alt="intro_bg" src={intro_bg}/>
                        <div className="loading__card">
                            <div className="loading__text">
                                <p>평화로운 코알라마을<br/>
                                모든 코알라들은 여유롭게 자고 먹으며<br/> 
                                루즈한 일상을 보내고 있다<br/><br/>  
                                
                                모두가 단조로운 생활을 할 때<br/>
                                한 마리의 코알라 {name}{this.state.postposition}<br/> 
                                '나는 좀 더 다른 삶을 살고 싶어!'라고<br/>
                                외치며 코알라 마을을 벗어나는데...<br/><br/>

                                {"과연 " + name + this.state.postposition}<br/>
                                다른 동물 세계를 탐험하며<br/>
                                자신의 진짜 모습을 찾을 수 있을까?
                                </p>
                            </div>
                            <Link className="loading__startbtn" to={{
                                pathname: '/quiz',
                                state: { name, sex }
                            }} onClick={this.handleClick}><p>시작하기</p></Link>
                        </div>
                </div>
            );
        } else {
            return null;
        } 
    }
}

export default Loading;