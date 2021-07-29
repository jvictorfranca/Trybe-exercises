import React from 'react';
import './App.css';

class Doguim extends React.Component {

  render(){
    let {currentDog} = this.props
    return(
      <div className='card'>
        {currentDog && <span className='breed'> {currentDog.message.split('/')[4]} </span> }
        {currentDog ?  <img src={currentDog.message} alt='Doguim' />: 'Loading...'}
      </div>
    )
  }
}

export default Doguim;
