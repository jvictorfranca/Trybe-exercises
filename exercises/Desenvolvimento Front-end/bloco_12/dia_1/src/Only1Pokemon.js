import React from 'react'
import './App.css';
import Pokemon from './Pokemon'

class Only1Pokemon extends React.Component {
  constructor(props){
    super();
    this.state = {
      current: 0,
      filter: 'all'
    }
  }
  filteredPokemon(filtered){
    this.setState((state, _props)=>({
      current: 0,
      filter: filtered
    }))
  }

  nextPokemon(totalNumber){
    this.setState((state, _props)=>({
      current: this.state.current === totalNumber ? 0 : this.state.current +1
    }))
  }

  getFiltered(){
     const {pokemons} = this.props;
     console.log(pokemons)
     const {filter} = this.state;
     console.log(pokemons.filter((pokemon)=>pokemon.type === filter))
     return(
 
       filter === 'all' ? pokemons : pokemons.filter((pokemon)=>pokemon.type === filter)
     )
  }

  getAllTypes(){
    const {pokemons} = this.props;
    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }
  
  render(){
    const filteredPokemons = this.getFiltered()
    const types = this.getAllTypes()
    console.log(types)
    const current = filteredPokemons[this.state.current]
    console.log(filteredPokemons)
    return (
    <div className="only1" >
     
    <Pokemon pokemon={current} />
      
    </div>
  );}
}

export default Only1Pokemon;