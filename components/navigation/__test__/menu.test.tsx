import React from 'react' // not necessary when using nextjs, React is in the scope
import {render, screen} from '@testing-library/react'
import Menu from '../menu'

it('Checks if menu has appropriate number of links', ()=>{
  render(<Menu />)
  const links = screen.getAllByRole('link')
  expect(links.length).toEqual(6)
})