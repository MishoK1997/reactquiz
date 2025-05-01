
import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context.jsx';
import logo from "../assets/quiz-complete.png"


export default function Result() {

    const {quizState} = useContext(QuizContext);

    const percentCal = (num) =>  ((num/quizState.questionsLength) * 100).toFixed(0);

    const skipped = percentCal(quizState.skipped)
    const answeredCorrectly = percentCal(quizState.answeredCorrectly)
    const answeredIncorrectly = percentCal(quizState.answeredIncorrectly)


    
    return (
        <section id='summary' className='slide-in-from-bottom'>
            <header>
                <img src={logo} alt="Quiz Completed" />
                <h2>QUIZ COMPLETED!</h2>
                <ul id='summary-stats'>
                    <li className='number'>
                        {`${skipped}%`}
                            <p className='text'>skipped</p></li>
                    <li className='number'>
                      {`${answeredCorrectly}%`}
                            <p className='text'>answered correctly</p></li>
                    <li className='number'>
                        {`${answeredIncorrectly}%`}
                            <p className='text'>answered incorrectly</p></li>
                </ul>
            </header>
            <ul>
                {quizState.userAnswers.map((answer, index) => (
                    <li key={`${index}-${answer.id}`}>
                        <h3 className='question'>{index + 1}</h3>
                        <p className='text'>{answer.text}</p>
                        <p className={answer.isCorrect ?
                            'answer user-answer correct'
                            : 'answer user-answer wrong'
                         }>{answer.answer}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}