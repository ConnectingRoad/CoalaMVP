import Info from '../components/Info';
import './Start.css';
import intro_bg from '../img/intro_bg.svg';

function Start() {
    return (
        <div className="start">
            <img className="start__bg" alt="start__bg" src={ intro_bg }/>
            <Info />
        </div>
    );
}

export default Start;