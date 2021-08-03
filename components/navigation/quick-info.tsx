import styled from 'styled-components'
import respond from 'styled-queries-ts'
import {ContainerNarrow} from '../../styles'
import { MdAvTimer, MdPinDrop, MdPhoneInTalk} from 'react-icons/md'
import {RiArrowRightCircleLine} from 'react-icons/ri'

export default function QuickInfoComponent() {
  return (
    <Background>
      <Container>
        <Info>
          <DetailTime>
            <MdAvTimer/>
            Ma-Za: 09:00 - 22:00
          </DetailTime>
          <DetailAddress>
            <MdPinDrop/>
            Rietveldenkade 38, 5222AJ Den Bosch
          </DetailAddress>
          <a href="tel:0031630971455">
            <DetailPhone>
              <MdPhoneInTalk/>
              (+31) (0) 630 97 14 55
            </DetailPhone>
          </a>
        </Info>
      </Container>
        <Cta>
            <RiArrowRightCircleLine/>
            Gratis brochure
        </Cta>
    </Background>
  )
}
const Background = styled.div`
  background-color: ${p=>p.theme.black};
  display: none;
  justify-content: space-between;
  ${respond('s', 'display: flex;')}
`
const Container = styled.div`
  display: flex;
  align-items: center;
`
const Info = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  // ${respond('xs', `display: flex;`)}
`
const Detail = styled.li`
  display: flex;
  align-items: center;
  margin: 0 2.2rem;
  font-size: 1.6rem;
  color: ${p=>p.theme.grey2};
  transition: all .3s;

  svg{
    margin-right: .9rem;
    font-size: 2.7rem;
    color: ${p=>p.theme.tertiary};
    transition: all .3s;
  }

  &:hover{

    svg{
      color: ${p=>p.theme.secondaryLight};
    }
    color: ${p=>p.theme.secondaryLight};
  }
`
const DetailTime = styled(Detail)`
  display: none;

  ${respond('l', `display: flex;`)}
`
const DetailAddress = styled(Detail)`
  display: none;

  ${respond('m', `display: flex;`)}
`
const DetailPhone = styled(Detail)`
  margin: 0;

  ${respond('s', `margin: 0 2.2rem;`)}
`
const Cta = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p=>p.theme.primary};
  color: ${p=>p.theme.white};
  padding: .6rem 0rem;
  margin-left: auto;
  padding-left: 1.4rem;
  font-size: 1.9rem;
  font-weight: 500;
  letter-spacing: .15rem;
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
  cursor: pointer;
  transition: all .3s;

  ${respond('s',`
    padding: .9rem 1.4rem;
    margin-left: auto;
    padding-left: 2.7rem;
  `)}

  svg{
    margin-right: .9rem;
    font-size: 2.7rem;
    color: ${p=>p.theme.white};
    transition: all .3s;
  }

  &:hover{
    background-color: ${p=>p.theme.tertiary};
  }

`