import React from 'react';
import './Info.css';
import naming_bg from '../img/naming_bg.svg';
import naming_img from '../img/naming_img.png';
import { Link } from 'react-router-dom';

class Info extends React.Component {
    state = {
        name: "",
        border: "0.18em solid #ffffff",
        placeholder: "",
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    handleClick = (e) => {
        if (!this.state.name.trim()) {
            e.preventDefault();
            this.setState({
                border: "0.18em solid rgb(221, 40, 60, 0.8)",
                placeholder: "이름을 입력해주세요"
            })
        }
    }
    
    render() {
        const { name } = this.state;

        return (
            <div className="info">
                <div className="info__card">
                    <img className="info__img" alt="naming_img" src={ naming_img }/>
                    <div className="info__text">당신의 코알라에게 이름을 지어주세요</div>
                    <input className="info__name" onChange={this.handleChange} 
                        style={ {border: this.state.border} } placeholder={this.state.placeholder}
                        maxLength="10"/>
                    <div className="sex">  
                        <Link className="info__male" to={{
                            pathname: '/loading',
                            state: { name, sex: "남" }
                        }} onClick={this.handleClick}><p>남자</p></Link>
                        <Link className="info__female" to={{
                            pathname: '/loading',
                            state: { name, sex: "여" }
                        }} onClick={this.handleClick}><p>여자</p></Link>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Info;