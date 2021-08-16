import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {

    const agumon = {
      "name": "Agumon",
      "img": "https://digimon.shadowsmith.com/img/agumon.jpg",
      "level": "Rookie"
    }


    const { findByText } = render(<Digimon digimon={agumon}/>);
    await findByText('Agumon')



  });
});
