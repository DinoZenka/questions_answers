import './App.css';
import React from 'react';
import Question from './components/question';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';

const App = () => {

  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [isAllValid, setAllValid] = React.useState(true);
  const [isSuccess, setSuccess] = React.useState(false);

  let allValids = React.useRef({});

  React.useEffect(() => {
    const getchData = async () => {
      setLoading(false);
      const data = await fetch('questions_answers/data.json').then(data => data.json());
      setQuestions(data.data);
      setLoading(true);
    }
    getchData();
  }, []);

  React.useEffect(() => {

    const newObj = {};
    const localStorObject = JSON.parse(localStorage.getItem("QUEST"));
    if (localStorObject) {
      setAnswers(localStorObject);
      return;
    }
    for (let i of questions) {
      newObj[i.question] = "";
    }
    setAnswers(newObj);
  }, [questions]);

  const isFormValid = () => {
    return allValids;
  }

  const ques = questions.map(elem => {
    return <Question
      question={elem.question}
      key={elem.id}
      id={elem.id}
      isFormValid={isFormValid}
      initial={answers[elem.question]}
    />
  });

  const onSend = (e) => {
    let canSend = true;
    for (const input of Object.values(allValids.current)) {
      canSend &= input.b;
    }
    setAllValid(canSend);
    const newObj = { ...answers };
    const toLocalObject = { ...answers };

    if (canSend) {
      Object.values(allValids.current).forEach(el => {
        const [quest, answ] = Object.entries(el)[1];
        newObj[quest] = "";
        toLocalObject[quest] = answ;
      });
      localStorage.setItem('QUEST', JSON.stringify(toLocalObject));

      setAnswers(newObj);
      setSuccess(true);
      setTimeout(() => {
        Swal.fire({
          title: "Сохранение даных", text: "Данные успешно сохранены в localStorage", icon: "success", didClose: () => {
            setSuccess(false);
          }
        });
      }, 200);

    }
    e.preventDefault();
  }

  if (isSuccess) {
    return <Confetti />
  }

  return (
    <div className="form-container">
      {
        isLoading
          ? <form className="form">
            {
              ques
            }
            {(!isAllValid) && <div style={{ color: "red" }}>Введите все поля</div>}
            <button className="send-button" onClick={onSend}>Отправить</button>
          </form>
          : <h1>Loading data...</h1>
      }
    </div>
  );
}

export default App;