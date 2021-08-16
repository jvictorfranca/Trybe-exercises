import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });
});




describe('Teste se mocka o fetch e renderiza pokemon', () => {
  it('renders Digimon', async () => {

    const agumon = [{
      "name": "Agumon",
      "img": "https://digimon.shadowsmith.com/img/agumon.jpg",
      "level": "Rookie"
    }]

    // jest.spyOn(global, "fetch")
    // global.fetch.mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(agumon),
    // });


    global.fetch = jest.fn(()=>
  Promise.resolve({
    json: ()=> Promise.resolve(agumon)
  }));

    const { findByText, getByTestId } = render(<App />);

    const pokemonInput = getByTestId('search-input')
    expect(pokemonInput).toHaveValue('')
    fireEvent.change(pokemonInput, {target: {value: 'Agumon'}})
    expect(pokemonInput).toHaveValue('Agumon')

    const searchButton = getByTestId('search-button')
    fireEvent.click(searchButton)

    expect(global.fetch).toBeCalledTimes(1)
    await findByText('Agumon')
    
  });
});
