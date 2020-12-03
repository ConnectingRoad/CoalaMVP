import React from 'react';
import './Info.css';
import naming_bg from '../img/naming_bg.svg';
import naming_img from '../img/naming_img.png';
import { Link } from 'react-router-dom';

class Info extends React.Component {
    state = {
        name: "",
        border: "solid #59375D",
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
                border: "solid #DD283C",
                placeholder: "이름을 입력해주세요"
            })
        }
    }
    
    render() {
        const { name } = this.state;

        return (
            <div className="info">
                <img className="info__bg" alt="naming_bg" src={ naming_bg }/>
                <img className="info__img" alt="naming_img" src={ naming_img }/>
                <div className="info__text">당신의 코알라에게 이름을 지어주세요</div>
                <input className="info__name" onChange={this.handleChange} 
                    style={ {border: this.state.border} } placeholder={this.state.placeholder}
<<<<<<< HEAD
                    maxLength="10"/> 
=======
                    maxLength="10"/>
>>>>>>> 1719e279c2efdccc666737531c87ece1aa896b61
                <Link className="info__male" to={{
                    pathname: '/loading',
                    state: { name, sex: "남" }
                }} onClick={this.handleClick}><p>남자</p></Link>
                <Link className="info__female" to={{
                    pathname: '/loading',
                    state: { name, sex: "여" }
                }} onClick={this.handleClick}><p>여자</p></Link>
            </div>
        );
    }
}

export default Info;