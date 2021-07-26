
import './App.css';
import React from 'react'
import Fieldset1 from './components/Fieldset1.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email:'',
      CPF: '',
      Adress: '',
      city: '',
    }
    this.handleData = this.handleData.bind(this)
    this.handleCity = this.handleCity.bind(this)
  }

  handleData(event){
    const {name} = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState((state)=>({
      [name]: value
    }))
  }

  handleCity(event){
    const {name} = event.target
    const value = event.target.value
    if ( isNaN(parseInt(value[0])) === false) 
    { this.setState((state)=>({
      [name]: ''
    }))}
  }

  render()
  {
    const {name, email, CPF, Adress, city} = this.state
  return (
    <div className="App">
      <form className="App-form">
        <Fieldset1 name={name} email={email} CPF= {CPF} Adress={Adress} city={city} handleData={this.handleData} handleCity={this.handleCity}/>
      </form>
    </div>
  );}
}

export default App;
