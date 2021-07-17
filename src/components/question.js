import React from 'react';

const Question = ({ question, id, changeVal, value }) => {

  return (
    <div className="question-container">
      <label className="question" htmlFor={`input${id}`}>{question}</label>
      <input
        id={`input${id}`}
        className="answer"
        type="text"
        value={value}
        onChange={changeVal}
        name={question}
        placeholder={"*Введите текст"}
        required={true}
      ></input>
    </div>
  )
}

export default Question;
