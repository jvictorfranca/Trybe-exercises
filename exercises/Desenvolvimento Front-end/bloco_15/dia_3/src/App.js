
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
      </Switch>
     <Route path="/About" component={About}/>
    </div>
  );
}

export default App;
