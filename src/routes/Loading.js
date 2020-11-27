import React from 'react';
import './Loading.css';
import start_btn from '../img/start_btn.svg';
import intro_bg from '../img/intro_bg.png';
import { Link } from 'react-router-dom';

class Loading extends React.Component{
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
                <div className="loading">
                    <img className="loading__bg" alt="intro_bg" src={intro_bg}/>
                    <div className="loading__text">
                        <p>평화로운 코알라 마을<br/>
                        모든 코알라들은 여유롭게 자고 먹으며<br/> 
                        루즈한 일상을 보내고 있다<br/><br/>  
                        
                        모두가 단조로운 생활을 할 때<br/>
                        {"한 마리의 코알라 "+ name + "는"}<br/> 
                        '나는 좀 더 다른 삶을 살고 싶어!'라고<br/>
                        외치며 코알라 마을을 벗어나는데...<br/><br/>

                        {"과연 " + name + "는"}<br/>
                        다른 동물 세계를 탐험하며<br/>
                        자신의 진짜 모습을 찾을 수 있을까?
                        </p>
                    </div>
                    <Link to={{
                        pathname: '/quiz',
                        state: { name, sex }
                    }}><img className="loading__img" alt="start_btn" src={start_btn}/></Link>
                </div>
            );
        } else {
            return null;
        } 
    }
}

export default Loading;