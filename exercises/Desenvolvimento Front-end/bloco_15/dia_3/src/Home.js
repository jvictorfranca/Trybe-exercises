import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div>
        <h1>oi hello Home</h1>
        <Link to="/About"> About </Link>
      </div>
    )
  }
}

export default Home