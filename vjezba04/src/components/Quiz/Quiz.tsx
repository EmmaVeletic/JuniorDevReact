import axios from 'axios'
import { useState, useEffect } from 'react'
import Result from '../Result/Result'
import stil from './Quiz.module.css'



export default function Quiz() {

    const [question, setQuestion] = useState({
        
        category: "",
        type: "",
        difficulty: "",
        question: "",
        correct_answer: "",
        incorrect_answers: [""]
            
      })

    const [activeQuestion, setActiveQuestion] = useState(1)
    const [selectedAnswer, setSelectedAnswer] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        correctAnswers: 0,
        wrongAnswers: 0,
      })
    
    const [showResult, setShowResult] = useState(false)
    const [showIsItCorrect, setCorrect] = useState(false)
    const [beginOfQuiz, setBegin] = useState(true)

    
      function getQuestion (){
        axios.get('https://opentdb.com/api.php?amount=5')
        .then((response) => {
            setQuestion(response.data.results[0])
             
        })
        .catch(error => alert(`Error: ${error}`))
    }
    

    const nextQuestion = (answer: any, index: any) => {

      setBegin(false)
      setSelectedAnswerIndex(index)
      getQuestion()
      if (answer === question.correct_answer) {
        setSelectedAnswer(true)
        setCorrect(true)
      } else {
        setSelectedAnswer(false)
        setCorrect(false)
      }

      setResult((prev) =>
      selectedAnswer? {
          ...prev,
          correctAnswers: prev.correctAnswers + 1
        }
      : { ...prev, 
        wrongAnswers: prev.wrongAnswers + 1 }
      )
    
      if (activeQuestion !== 5) {
          setActiveQuestion((prev) => prev + 1);
          
        
      } else {
          setActiveQuestion(1)
          setShowResult(true)
      }
             
    }

    const startQuiz = () => {
      setResult(() =>( {
          score: 0,
          correctAnswers: 0,
          wrongAnswers: 0 
        }))
      setShowResult(false);
        getQuestion()
      
    }

    const allAnswers = [];
    allAnswers.push(...question.incorrect_answers, question.correct_answer)
    allAnswers.sort(() => Math.random() - 0.5);
    console.log(allAnswers)
    
    
 return (
  <div className={stil["main-container"]}>
    <h1>General Knowledge Quiz</h1>
    
    { !showResult ? ( 
    <div>
    { beginOfQuiz ? (
    <div>
    <button className={stil["main-button"]} onClick={startQuiz}>Start quiz</button>
    </div>
    )
    : (
      <p></p>
    )
    }
    <span className={stil["question"]}>Question: {activeQuestion}/5</span>

    <h2>{question.question}</h2>
    
    <div className={stil["answers"]}>
    <ul>
        {allAnswers.map((element, index) => (
        <li
          onClick={() => nextQuestion(element, index)}
          key={element}
          className={selectedAnswerIndex === index ? stil['selected'] : stil['notSelected']}>
          {element}
          
        </li>
     ))}
    </ul>
    </div>
    { beginOfQuiz ? (
      
    <p></p>
    )
    :
    (
      <div>
    {showIsItCorrect?(
        <div className={stil["correct"]}>
          <p>That's corret answer!</p>
        </div>
      )
      :
      <div className={stil["wrong"]}>
        <p>Wrong answer, sorry.</p>
      </div>
    }
    </div>
    )
  }
       
      <div>
      <div className={stil["result"]}>
      
      <h3>Result</h3>
      <p>
        Total Question: <span>5</span>
      </p>
      <p>
        Correct Answers:<span> {result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers:<span> {result.wrongAnswers}</span>
      </p>
      
      </div>

      </div>
    </div>
  
    
    ) : (
     
    <div >
          
          <div className={stil["result"]}>
      
          <h3>Result</h3>
          <p>
            Total Question: <span>5</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          
          </div>
          <div>
          <button className={stil["main-button"]} onClick={startQuiz}>Start quiz again</button>
          </div>   
    </div>


        )}
          
 </div>
 )
}

 