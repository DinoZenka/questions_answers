import React from 'react';


const useValidation = (value, validators) => {
  const [isEmpty, setEmpty] = React.useState(true);
  const [isMinLength, setMinLength] = React.useState(true);
  const [isInputValid, setInputValid] = React.useState(true);


  React.useEffect(() => {
    for (const valid in validators) {
      switch (valid) {
        case "isEmpty": {
          value ? setEmpty(false) : setEmpty(true);
          break;
        }
        case "minLength": {
          value.length >= validators[valid] ? setMinLength(false) : setMinLength(true);
          break;
        }
      }
    }
  }, [value]);

  React.useEffect(() => {
    if (isEmpty || isMinLength) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isMinLength, isEmpty]);


  return {
    isEmpty,
    isMinLength,
    isInputValid
  }
}



const useInput = (initialValue, validations, isReset) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setDirty] = React.useState(false);
  const valid = useValidation(value, validations);

  if (value !== "" && initialValue === "") {
    setValue("");
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onBlur = (e) => {
    setDirty(true);
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}


const Question = ({ question, id, isFormValid, initial }) => {
  const val = useInput(initial, { isEmpty: true, minLength: 2 }, initial === "");

  isFormValid().current[id] = { b: val.isInputValid, [question]: val.value };

  return (
    <div className="question-container">
      <label className="question" htmlFor={`input${id}`}>{question}</label>

      {(val.isDirty && val.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
      {(val.isDirty && val.isMinLength) && <div style={{ color: 'red' }}>Минимальная длина текста 2 символа</div>}
      <input
        id={`input${id}`}
        className="answer"
        type="text"
        value={val.value}
        onChange={e => val.onChange(e)}
        onBlur={e => val.onBlur(e)}
        name={question}
        placeholder={"*Введите текст"}
        required
      ></input>
    </div>
  )
}

export default Question;
