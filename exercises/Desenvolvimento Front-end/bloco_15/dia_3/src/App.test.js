import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRouter from './renderWithRouter'

test('if renders', () => {
  renderWithRouter(<App/>)
  const texto = screen.getByRole('heading', {
    level: 1,
    name: 'oi hello Home'
  })
  expect(texto).toBeInTheDocument()
});


test('links', () => {
  const {history} = renderWithRouter(<App/>)
  const link = screen.getByRole('link', {
    name: 'About'
  })

  userEvent.click(link);
  const path = history.location.pathname;
  expect(path).toBe('/About')
  
});

test('push', () => {
  const {history} = renderWithRouter(<App/>)
  history.push('/About')
  let button = screen.getByRole('button', {
    name: 'Click'
  });
  expect(button).toBeInTheDocument()
  
});


test('link home', () => {
  const {history} = renderWithRouter(<App/>)
  history.push('/About')
  let link = screen.getByRole('link', {
    name: 'Home'
  });
  userEvent.click(link)
  let path = history.location.pathname
  expect(path).toBe('/')
  
});