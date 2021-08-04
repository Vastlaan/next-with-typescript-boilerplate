import React from 'react'
import MenuButton from '../menu-button'
import renderer from 'react-test-renderer'

/**
 * @jest-environment jsdom
 */

it('Checks if the setIsOpen is called on button click', ()=>{

  let isOpen = false
  const setIsOpen = jest.fn()

  const component = renderer.create(
    <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
  )

  let tree = component.toJSON() as renderer.ReactTestRendererJSON
  // expect(tree).toMatchSnapshot()

  tree = component.toJSON() as renderer.ReactTestRendererJSON
  tree.props.onClick()
  expect(setIsOpen).toHaveBeenCalled()
  
})