// https://stackblitz.com/
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

type Button = {
  id: string;
  color: string;
};
const buttonsFromDB: Button[] = [
  {
    id: '1',
    color: 'red',
  },
  {
    id: '2',
    color: 'green',
  },
  {
    id: '3',
    color: 'blue',
  },
];

type MyButtonProps = {
  color: string;
  onAdd: () => void;
  onMinus: () => void;
  children: React.ReactNode;
};

function MyButton(props: MyButtonProps) {
  function handleAdd() {
    props.onAdd();
  }

  function handleMinus() {
    props.onMinus();
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <button
        onClick={handleAdd}
        style={{
          background: props.color,
          color: 'white',
          outline: '2px solid ' + props.color,
          outlineOffset: '4px',
          margin: '12px',
        }}
      >
        +
      </button>
      {props.children} {props.color} {'button.'}
      <button
        onClick={handleMinus}
        style={{
          background: props.color,
          color: 'white',
          outline: '2px solid ' + props.color,
          outlineOffset: '4px',
          margin: '12px',
        }}
      >
        -
      </button>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState<number>(0);

  const [buttons, setButtons] = React.useState<Button[]>([]);
  const [numberOfRuns, setNoOfRuns] = React.useState<number>(0);

  React.useEffect(() => {
    const getButtonsFromDB = async () => {
      setButtons(buttonsFromDB);
      setNoOfRuns((prev) => prev + 1);
    };

    getButtonsFromDB();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React</h1>
      <div className="card">
        <h4>Count: {count}</h4>
        <h4>No of useEffect runs: {numberOfRuns}</h4>

        <br />

        {buttons.map((button, index) => {
          return (
            <MyButton
              key={button.id || index}
              color={button.color}
              onMinus={() => {
                setCount((prev) => {
                  return (prev -= 4);
                });
              }}
              onAdd={() => {
                setCount((prev) => {
                  return (prev += 4);
                });
              }}
            >
              I am
            </MyButton>
          );
        })}
      </div>
    </>
  );
}

export default App;
