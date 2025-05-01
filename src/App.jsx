import Start from './components/Start.jsx';
import Quiz from './components/Quiz.jsx';
import {  useContext } from 'react';
import QuizContextProvider from './store/quiz-context.jsx';
import {QuizContext} from './store/quiz-context.jsx';



function AppContent() {


    const {quizState} = useContext(QuizContext);


    return (
        <>
        {
            //Initial value is null that introduces a starting page.
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
