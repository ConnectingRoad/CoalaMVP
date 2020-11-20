import './QuizCard.css';

function QuizCard() {
    return (
        <div className="quiz__card">
            <img className="quiz__img" alt="quiz_img"/>
            <div className="quiz__text">
                <p>두 갈래 길에 들어선 코알라<br/>
                이정표가 없다! 이때 당신의 선택은?
                </p>
            </div>
        </div>
    )
}

export default QuizCard;