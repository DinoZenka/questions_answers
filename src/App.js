import './App.css';
import React from 'react';
import Question from './components/question';

function App() {
  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getchData = async () => {
      setLoading(false);
      const data = await fetch('data.json').then(data => data.json());
      setQuestions(data.data);
      setLoading(true);
    }
    getchData();
  }, []);

  React.useEffect(() => {
    const newObj = {};
    for (let i of questions) {
      const val = localStorage.getItem(i.question);
      newObj[i.question] = val ? val : "";
    }
    setAnswers(newObj);
  }, [questions])

  const onChange = (event) => {
    const newAnswers = {
      ...answers,
      [event.target.name]: event.target.value
    }
    setAnswers(newAnswers);
  }

  const onSend = (e) => {
    const keys = Object.keys(answers);
    let flag = false;
    const newObj = {}
    for (let i of keys) {
      if (answers[i] === "") {
        flag = true;
      }
      localStorage.setItem(i, answers[i]);
      newObj[i] = "";
    }
    if (flag) {
      localStorage.clear();
      alert('Введите все поля');
    } else {
      alert(`Данные сохранены!`);
      setAnswers(newObj);
    }
    e.preventDefault();
  }

  return (
    <div className="form-container">
      {
        isLoading
          ? <form className="form">
            {
              questions.map(elem => {
                const newValue = answers[elem.question];
                return <Question
                  question={elem.question}
                  key={elem.id}
                  id={elem.id}
                  changeVal={onChange}
                  value={newValue ? newValue : ""}
                />
              })
            }
            <button className="send-button" onClick={onSend}>Отправить</button>
          </form>
          : <h1>Loading data...</h1>
      }
    </div>

  );
}

export default App;
