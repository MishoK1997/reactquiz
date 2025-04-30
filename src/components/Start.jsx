import { styled } from "styled-components";

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: #e781fb;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease;
  overflow: hidden; /* important for smooth background-clip on text */

  &:hover {
    background-image: linear-gradient(90deg, #e781fb 40%, #8e76fa 60%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    transform: scale(1.05); /* optional nice grow effect */
  }
`;



const Section = styled.section`
  text-align: center;
  margin-top: 5rem;

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #e781fb 40%, #8e76fa 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; /* standard */
    color: transparent; /* fallback for safety */
  }  
`;

import { useContext } from "react";
import { QuizContext } from "../store/quiz-context.jsx";

export default function Start() {

    const {startQuiz} = useContext(QuizContext);

  return (
    <Section id="quiz">
      <p>Start The quiz and check your knowledge</p>
      <Button onClick={startQuiz}>Start Quiz</Button>
    </Section>
  );
}
