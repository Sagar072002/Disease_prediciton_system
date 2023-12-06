import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Symptom.css';

const QuestionRow = ({ question, name, handleChange }) => (
  <div className="row">
    <div className="firstrow">
      <p>{question}</p>
    </div>
    <div className="secondrow">
      <input
        type="radio"
        id={`${name}-yes`}
        name={name}
        value="Yes"
        onChange={() => handleChange(name, 'Yes')}
      />
      <label htmlFor={`${name}-yes`}>Yes</label>
      <input
        type="radio"
        id={`${name}-no`}
        name={name}
        value="No"
        onChange={() => handleChange(name, 'No')}
      />
      <label htmlFor={`${name}-no`}>No</label>
      <input
        type="radio"
        id={`${name}-dontknow`}
        name={name}
        value="Don't Know"
        onChange={() => handleChange(name, "Don't Know")}
      />
      <label htmlFor={`${name}-dontknow`}>Don't Know</label>
    </div>
  </div>
);

const Question = () => {
  const [answers, setAnswers] = useState({
    diabetes: '',
    overweight: '',
    hypertension: '',
    injury: '',
    cholesterol: '',
  });

  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: value }));
  };

  const allQuestionsAnswered = () => {
    return Object.values(answers).every((answer) => answer !== '');
  };

  return (
    <div className="quesdiv">
      <div className="questions">
        <h2>Please check all the statements below that apply to you</h2>
        <pre>Select one answer in each row</pre>

        <QuestionRow
          question="I have diabetes"
          name="diabetes"
          handleChange={handleAnswerChange}
        />
        <QuestionRow
          question="I’m overweight or obese"
          name="overweight"
          handleChange={handleAnswerChange}
        />
        <QuestionRow
          question="I have hypertension"
          name="hypertension"
          handleChange={handleAnswerChange}
        />
        <QuestionRow
          question="I’ve recently suffered an injury"
          name="injury"
          handleChange={handleAnswerChange}
        />
        <QuestionRow
          question="I have high cholesterol"
          name="cholesterol"
          handleChange={handleAnswerChange}
        />

        {allQuestionsAnswered() && (
          <Link to="/symptom/predict">
            <button>Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Question;
