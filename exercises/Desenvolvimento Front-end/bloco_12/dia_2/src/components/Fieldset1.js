import React from 'react'

class Fieldset1 extends React.Component {
  render(){
    const {handleData, handleCity, name, email, Adress, CPF, city} = this.props
    return (
      <fieldset className='data' >
        <label htmlFor="name">
          Seu nome aqui: 
          <input type="text" style={{textTransform: 'uppercase'}} maxLength='40' required value={name} onChange={handleData} name='name' id='name'/>
        </label> 

        <label htmlFor="email">
          Seu email aqui: 
          <input type="email" maxLength='50' required value={email} onChange={handleData} name='email' id='email'/>
        </label>

        <label htmlFor="CPF">
          Seu CPF aqui: 
          <input type="number" minLength='11' maxLength='11' required value={CPF} onChange={handleData} name='CPF' id='CPF'/>
        </label>

        <label htmlFor="Adress">
          Seu endereço aqui: 
          <input type="text" maxLength='200' required value={Adress} onChange={handleData} name='Adress' id='Adress' />
        </label>

        <label htmlFor="city">
          Sua Cidade aqui: 
          <input type="text" maxLength='60' required value={city} onChange={handleData} name='city' id='city' onBlur={handleCity}/>
        </label>

      </fieldset>
    )
   
  }
}


export default Fieldset1;