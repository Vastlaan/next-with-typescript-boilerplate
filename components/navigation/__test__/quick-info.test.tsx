import React from 'react' // not necessary when using nextjs, React is in the scope
import {render, screen} from '@testing-library/react'
import QuickInfo from '../quick-info'
import '@testing-library/jest-dom' // this import to be able to call .toBeInTheDocument()

it('checks if QuickInfo component renders opening hours, address, phone and a link to download brochure', ()=>{
  render(<QuickInfo/>)
  const time = screen.getByTestId('time')
  const address = screen.getByTestId('address')
  const phone = screen.getByTestId('phone')
  const brochure = screen.getByTestId('brochure')

  expect(time).toBeInTheDocument()
  expect(address).toBeInTheDocument()
  expect(phone).toBeInTheDocument()
  expect(brochure).toBeInTheDocument()
})