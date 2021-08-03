import { useState, useEffect } from 'react'
import styled from 'styled-components'
import respond from 'styled-queries-ts'
import QuickInfo from './quick-info'
import Menu from './menu'
import MenuButton from './menu-button'


interface MenuConatierProps{
  isOpen?: boolean;
}

export default function NavigationComponent() {

  const [isOpen, setIsOpen] = useState(false)
    const [isSmall, setIsSmall] = useState(false)

    useEffect(()=>{
        function switchSize(){
            return window.innerWidth <= 768 ? setIsSmall(true): setIsSmall(false)
        }
        window.addEventListener('resize',switchSize)
        switchSize()

        return ()=>window.removeEventListener('resize', switchSize)
    })

  return (
    <Navigation>
      <QuickInfo/>
      <MenuContainer isOpen={isOpen}>
        <Menu />
      </MenuContainer>
      {isSmall && <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </Navigation>
  )
}

const Navigation = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${p=>p.theme.white};
  box-shadow: 0 .2rem .3rem rgba(0,0,0,.2);
  z-index: 99;
`
const MenuContainer = styled.div<MenuConatierProps>`
    position: absolute;
    top: 100%;
    right: ${p=>p.isOpen?'0': '-120%'};
    width: 100vw;
    background-color: ${p=>p.theme.white};
    display: flex;
    flex-direction: column;
    padding: 2.7rem;
    transition: all .3s;
    ${()=>respond('m',`
        position: static;
        flex-direction: row;
        aling-items: center;
        justify-content: space-between;
        width: auto;
        flex-grow:1;
        background-color: transparent;
        padding: 0;
        right: ${p=>p.isOpen?'-1.4rem': '-120%'};
    `)}
`
