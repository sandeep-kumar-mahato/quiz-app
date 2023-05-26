import React, { useState } from "react";
import "./styles.css";

const questions = [
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    options: [
      "largest railway station",
      "highest railway station",
      "longest railway station",
      "None of the above",
    ],
    answer: "largest railway station",
  },
  {
    question: "Entomology is the science that studies",
    options: [
      "Behavior of human beings",
      "Insects",
      "The origin and history of technical and scientific terms",
      "The formation of rocks",
    ],
    answer: "Insects",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleShowResult = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const renderQuiz = () => {
    if (showResult) {
      return (
        <div className="result">
          <h2>Quiz Result</h2>
          <p>
            Your Score: {score}/{questions.length}
          </p>
          {score >= questions.length / 2 ? (
            <p className="success">Congratulations! You did great!</p>
          ) : (
            <p className="motivation">Keep practicing. You can do better!</p>
          )}
        </div>
      );
    }

    const currentQuiz = questions[currentQuestion];

    return (
      <div className="container">
        <h2 className="animated-title">Quiz App</h2>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <div className="question">
          <p>{currentQuiz.question}</p>
          <ul>
            {currentQuiz.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
        {currentQuestion === questions.length - 1 ? (
          <button onClick={handleShowResult}>Submit</button>
        ) : (
          <button onClick={handleNextQuestion}>Next</button>
        )}
      </div>
    );
  };

  return <div>{renderQuiz()}</div>;
};

export default QuizApp;
