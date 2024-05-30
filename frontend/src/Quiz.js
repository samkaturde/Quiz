import React, { useState, useEffect } from 'react';
import questions from './questions';
import axios from 'axios';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [runCount, setRunCount] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await axios.get('http://localhost:5001/score');
      setRunCount(response.data.runCount);
      setTotalScore(response.data.totalScore);
    };
    fetchScores();
  }, []);

  const handleAnswer = async (answer) => {
    if (answer === 'yes') {
      setYesCount(yesCount + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalYesCount = yesCount + (answer === 'yes' ? 1 : 0);
      const score = (finalYesCount * 100) / questions.length;

      const response = await axios.post('http://localhost:5001/score', { score });
      const updatedRunCount = response.data.runCount;
      const updatedTotalScore = response.data.totalScore;

      setRunCount(updatedRunCount);
      setTotalScore(updatedTotalScore);

      alert(`Your score for this run: ${score}\nAverage score for all runs: ${(updatedTotalScore / updatedRunCount).toFixed(2)}`);

      // Reset for the next run
      setCurrentQuestion(0);
      setYesCount(0);
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      <p>{questions[currentQuestion]}</p>
      <button onClick={() => handleAnswer('yes')}>Yes</button>
      <button onClick={() => handleAnswer('no')}>No</button>
    </div>
  );
};

export default Quiz;
