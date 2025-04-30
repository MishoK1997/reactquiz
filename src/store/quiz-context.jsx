import {createContext, useReducer,useEffect, useState} from 'react';
import questions from '../questions.js';    

// const questionIndex = questions.length > 0 ? Math.floor(Math.random() * questions.length) : 0;

export const QuizContext = createContext(null);


// Initial state for the quiz reducer
const initialState = {
    currRandQuiz: null,
    questions: questions,
    skipped: 0,
    answeredCorrectly: 0,
    answeredIncorrectly: 0,
}


function quizReducer (state, action) {
    switch(action.type){
        case 'START_QUIZ':
            return {
                ...state,
                // questions: state.questions.map(q => ({
                //     ...q,
                //     answers: [...q.answers] 
                // })
                // ),
                currRandQuiz: Math.floor(Math.random() * state.questions.length),
            };
        case 'SET_QUIZ':
            const newQuestions = state.questions
            .filter((question, index) => index !== state.currRandQuiz)
            .map(q => ({
                ...q,
                answers: [...q.answers]
            }));

            return {
                ...state,
                currRandQuiz: Math.floor(Math.random() * newQuestions.length),
                questions: newQuestions
            };
        case 'PICK_ANSWER':
            const isCorrect = action.id === state.questions[state.currRandQuiz].correctAnswerIndex;
            const isSkipped = action.id == undefined;
            return {
                ...state,
                skipped: !isCorrect && isSkipped ? state.skipped +1 : state.skipped,
                answeredCorrectly: isCorrect ? state.answeredCorrectly + 1 : state.answeredCorrectly,
                answeredIncorrectly: !isCorrect && !isSkipped
                 ? state.answeredIncorrectly + 1 : state.answeredIncorrectly,
            }
            
          default:
            return state;
           
    }

}


// Main provider for context 
export default function QuizContextProvider({children}) {

    const [quizState, quizDispatch] = useReducer(quizReducer, initialState)

    function startQuiz () {
        quizDispatch(
            {type: 'START_QUIZ'}
        )
    }

    function handleCurrRandQuiz () {
        quizDispatch(
            {type: 'SET_QUIZ'}
        )
    }

    function handlePickAnswer(id) {
        quizDispatch(
            {type: 'PICK_ANSWER', id}
        )

        // handleCurrRandQuiz()
    }

    return (
        <QuizContext value={{
            quizState,
            startQuiz,
            handleCurrRandQuiz,
            handlePickAnswer
            
        }} >{children}</QuizContext>
    )
}