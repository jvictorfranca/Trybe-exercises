import React from 'react';
import './App.css';
import Doguim from './Doguim';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDog: undefined,
      dogs:[],
    }
    this.saveDog = this.saveDog.bind(this)
  }
  componentDidMount(){
    this.fetchDogs()
  }

  async fetchDogs () {
    this.setState((prevState)=>({
      currentDog: undefined
    }))    
    let request = await fetch('https://dog.ceo/api/breeds/image/random')
    let dogs = await request.json()
    
    console.log(this.state.currentDog)
    this.setState((prevState)=>({
      currentDog: dogs
    }))
    console.log(this.state.currentDog)
  }

  saveDog () {
    this.setState((prevState)=>({
      dogs: [...prevState.dogs, this.state.currentDog]
    }))
    this.fetchDogs()
  }

  render(){
    let dog = this.state.currentDog
    let allDogs = this.state.dogs
    console.log(dog)
    return(
      <div className='container'>
        <Doguim currentDog={dog}/>
        {allDogs.map((dog)=><Doguim currentDog={dog}/>)}
        <button onClick={this.saveDog}>Next Dog</button>
      </div>
    )
  }
}

export default App;
