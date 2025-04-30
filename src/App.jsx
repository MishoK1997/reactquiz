import Start from './components/Start.jsx';
import Quiz from './components/Quiz.jsx';
import {  useContext, useEffect } from 'react';
import QuizContextProvider from './store/quiz-context.jsx';
import {QuizContext} from './store/quiz-context.jsx';



function AppContent() {


    const {quizState} = useContext(QuizContext);


    return (
        <>
        {
         quizState.currRandQuiz !== null 
         ? <Quiz /> : <Start />
        }
        </>
    )
}

export default function App() {
    return (
        <QuizContextProvider>
            <AppContent />
        </QuizContextProvider>
    )
}
