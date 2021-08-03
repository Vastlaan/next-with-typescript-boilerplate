import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Heading3, Text } from "../../../styles"
import respond from 'styled-queries-ts'
import { IRepairs } from '../../../types'

export default function AssistanceComponent({title, body, imageUrl, linkUrl}:IRepairs) {
  return (
    <Link href={linkUrl || '/'}>
      <Assistance>
        <ImageContainer>
          <Image src={imageUrl || '/img/car-breaks-1.jpg'} alt={title} layout='fill' objectFit='cover'/>
        </ImageContainer>
        <Heading3 margin='2.7rem auto 1.4rem auto'>{title}</Heading3>
        <Text>{body}</Text>
        <Line/>
      </Assistance>
    </Link>
  )
}

const Line = styled.div`
  width: 0;
  height: 3px;
  background-color: ${p=>p.theme.primary};
  margin-top: auto;
  transition: all .6s;
`

const ImageContainer = styled.div`
  width: 33rem;
  height: 27rem;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0);
    z-index: 5;
    transition: all .3s;
  }
`

const Assistance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2.7rem 1.4rem;
  cursor: pointer;
  

  ${(p)=>respond('m',`
    max-width: 33rem;
    background-color: ${p.theme.grey1};
    box-shadow: 0 .3rem .6rem rgba(0,0,0,.3);
  `)}

  &:hover{

    ${Line}{
      width: 100%;
    }
    ${ImageContainer}{

        &::before{
          background-color: rgba(0,0,0,.3);
        }
    }
  }
`