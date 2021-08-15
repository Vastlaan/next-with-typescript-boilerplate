import {SetStateAction, useState} from 'react'
import styled from 'styled-components'
import {TextStrong} from '../../styles'
import {MdClose} from 'react-icons/md'
import gsap from 'gsap'

interface BrochureProps{
  setDisplayModal: SetStateAction<boolean>
}

export default function BrochureModal({setDisplayModal}) {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleDownload = (e) =>{
    e.stopPropagation()
    e.preventDefault()

    // validate email
    if(!validateEmail(email)){
      return setError('Email must be valid!')
    }
    const link = document.createElement('a')
    link.href='brochure.txt'
    link.click()
  }

  return (
    <Modal onClick={()=>setDisplayModal(false)} >
      <Close onClick={()=>setDisplayModal(false)}>
        <MdClose />
      </Close>
      <InnerContainer onClick={(e)=>e.stopPropagation()}>
        <TextStrong>Download gratis brochure aan:</TextStrong>
        <Form onSubmit={handleDownload} >
          <input 
            onClick={(e)=>e.stopPropagation()} 
            onChange={(e)=>setEmail(e.target.value)} 
            value={email}
            type="email" 
            placeholder='jouw email' 
          />
          <button type='submit' >Download</button>
        </Form>
        {error && <Error>{error}</Error>}
      </InnerContainer>
    </Modal>
  )
}

const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.9);
  z-index: 99;
  animation: appearFromRight .3s;
  
`
const Close = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 2.7rem;
  right: 2.7rem;
  cursor: pointer;

  svg{
    font-size: 4.7rem;
    color: ${p=>p.theme.white};
  }

`
const InnerContainer = styled.div`
  background-color: ${p=>p.theme.white};
  padding: 2.7rem;
  display: flex;
  flex-direction: column;
  border: 3px solid ${p=>p.theme.primary};


`
const Form = styled.form`
  display: flex;
  margin: 2.7rem auto .9rem auto;

  input{
    border: 1px solid ${p=>p.theme.primary};
    border-right: none;
    font-size: 1.6rem;
    padding: .6rem 1.9rem;
  }
  button{
    border: 1px solid ${p=>p.theme.primary};
    border-left: none;
    background-color: ${p=>p.theme.primary};
    padding: .6rem 1.9rem;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: .15rem;
    text-transform: uppercase;
    color: ${p=>p.theme.grey1};
    transition: all .3s;

    &:hover{
      background-color: ${p=>p.theme.tertiary};
      border: 1px solid ${p=>p.theme.tertiary};
      border-left: none;
    }

  }
`
const Error = styled.small`
  font-size: 1.6rem;
  color: orangered;
`