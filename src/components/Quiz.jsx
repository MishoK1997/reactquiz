import { useEffect,useRef , useContext, useCallback} from 'react';
import ProgressBar from './ProgressBar.jsx';
import {QuizContext} from '../store/quiz-context.jsx';
import Result from './Result.jsx';


export default function Quiz() {

    // const answerRef = useRef();

    const {handleCurrRandQuiz, quizState, handlePickAnswer} = useContext(QuizContext);

    const question = quizState.questions[quizState.currRandQuiz];

    useEffect(() => {

        if(question){
            const timer = setTimeout(() => {
                handleCurrRandQuiz()
                handlePickAnswer(undefined)
            }, 20000)
            
            return () => { 
                console.log("Clear timer"),
                clearTimeout(timer)
            }
        }
      
    }, [question])

    // useEffect(() => {
    //     console.log("answ", answerRef.current.value)
    // }, [answerRef])


    // useEffect(() => {
    //     console.log("Picked Answers", pickedAnswers)
    // }, [pickedAnswers])
    useEffect(() => {
        console.log("Quiz State", quizState)
    }, [question])


    return (
        <>
        {
        quizState.questions.length > 0 
        ?  <form id="quiz" action=''>
                
            <fieldset id='question'>
            <ProgressBar trigger={question}/>
                    <legend><h2>{question.text}</h2></legend> 
                    <ul id="answers">
                        {
                            question.answers.map((answer, index)=> {
                                return (
                                    <li key={index} className="answer">
                                                                            
                                        {/* <input ref={answerRef} type='radio'name={question.id} id={answer} value={answer}/>
                                        <label className='answerBtn' htmlFor={answer}>{answer}</label> */}

                                    <button onClick={(e) =>{
                                        e.preventDefault()
                                        handlePickAnswer(index)
                                        handleCurrRandQuiz()
                                    }} 
                                    >{answer}</button>
                                    
                                    </li>
                                )
                            })
                        }
                    </ul>
            </fieldset>
    
          </form>
          : <Result /> 

        }
        </>

    )


}