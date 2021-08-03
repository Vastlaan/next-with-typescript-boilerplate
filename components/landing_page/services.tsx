import styled from 'styled-components'
import respond from 'styled-queries-ts'
import {IoMdCheckboxOutline} from 'react-icons/io'
import {Heading3, Text} from '../../styles'

export default function ServicesComponent() {
  return (
    <Background>
      <Services>

        <Service>
          <IoMdCheckboxOutline/>
          <Content>
            <Heading3 color='snow'>APK Keuring in den Bosch</Heading3>
            <Text color='#ced4da' align='left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, suscipit.</Text>
          </Content>
        </Service>

        <Service>
          <IoMdCheckboxOutline/>
          <Content>
            <Heading3 color='snow'>Grote Beurt, Kleine Beurt</Heading3>
            <Text color='#ced4da' align='left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, suscipit.</Text>
          </Content>
        </Service>

        <Service>
          <IoMdCheckboxOutline/>
          <Content>
            <Heading3 color='snow'>Banden Service</Heading3>
            <Text color='#ced4da' align='left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, suscipit.</Text>
          </Content>
        </Service>

        <Service>
          <IoMdCheckboxOutline/>
          <Content>
            <Heading3 color='snow'>Olie verversen</Heading3>
            <Text color='#ced4da' align='left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, suscipit.</Text>
          </Content>
        </Service>

      </Services>
    </Background>
  )
}

const Background = styled.section`
  padding: 4.7rem 1.4rem;
  background-image: linear-gradient(to bottom, rgba(61,61,61,.8), rgba(61,61,61,.8)), url('img/header-2.jpg');
`

const Services = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 992px;
  margin: 1.4rem auto;

  ${respond('m',`
    flex-direction: row;
    flex-wrap: wrap;
  `)}
`
const Service = styled.div`
  width: 100%;
  padding: 1.4rem;
  display: flex;
  margin: 2.7rem 0;

  ${respond('m',`
    width:50%;
  `)}

  svg{
    color: ${p=>p.theme.primary};
    font-size: 4.7rem;
  }

`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.7rem;

`
