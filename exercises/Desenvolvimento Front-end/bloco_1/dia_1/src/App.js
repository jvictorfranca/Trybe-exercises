import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['cuidar dog', 'tomar banho', 'alouzar']

function App() {
  return (
    <div className="App">
      <ul>
        {tarefas.map((tarefa)=>Task(tarefa))}
      </ul>
    </div>
  );
}

export default App;
