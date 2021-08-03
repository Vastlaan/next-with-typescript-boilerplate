import styled from 'styled-components'
import respond from 'styled-queries-ts'
import { Line } from '../../styles'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function BrochureComponent() {
  return (
    <Brochure>
      <label htmlFor="brochure">Vraag gratis brochure aan:</label>
      <Row>
        <input type="email" placeholder='jouw email' />
        <button>Download</button>
      </Row>
      
      <Social>
        <FaFacebook />
        <FaInstagram color='pink'/>
        <FaTwitter color='skyblue'/>
      </Social>
    </Brochure>
  )
}

const Brochure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${respond('m',`
    align-items: flex-end;
  `)}

  label{
    font-size: 1.9rem;
    font-weight: 300;
    color: ${p=>p.theme.grey2};
    margin-bottom: .9rem;
  }
`
const Row = styled.div`
  display: flex;

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

const Social = styled.div`
  margin-top: 2.7rem;

  ${respond('m',`
    margin-top: auto;
  `)}

  svg{
    margin-right: 1.9rem;
    font-size: 2.7rem;
    color: ${p=>p.theme.secondary};
    cursor: pointer;  
    transition: all .3s;

    &:hover{
      color: ${p=>p.theme.grey1} !important;
    }
  }
`