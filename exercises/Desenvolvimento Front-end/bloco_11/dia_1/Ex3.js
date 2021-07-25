//Site: https://www.freecodecamp.org/learn/front-end-libraries/react/
//Até o Create a Component with Composition



//Create a Simple JSX Element
const JSX =<h1>Hello JSX!</h1>

//Create a Complex JSX Element
const JSX = <div>
<h1>Jao</h1>
<p>Tarefas de jao</p>
<ul>
<li>limpar casa</li>
<li>tomar banho</li>
<li>comer pao com queijo</li>
</ul>
</div>

//Add Comments in JSX
const JSX = (
  <div>
  {/*Oi to comentando aqui*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

//Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'))

//Define an HTML Class in JSX
const JSX = (
  <div className = 'myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

//Learn About Self-Closing JSX Tags
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

//Create a Stateless Functional Component
const MyComponent = function() {
return(
  <div>some strings of text</div>
)}

//Create a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
return (
 <div><h1>Hello React!</h1></div>
)
  }
};

//Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
          <ChildComponent />
      </div>
    );
  }
};
