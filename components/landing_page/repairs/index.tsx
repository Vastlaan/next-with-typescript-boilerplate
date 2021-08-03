import styled from 'styled-components'
import { SectionNarrow } from "../../../styles"
import respond from 'styled-queries-ts'
import { IRepairs } from '../../../types'
import Assistance from './assistance'


export default function RepairsComponent() {
  return (
    <SectionNarrow>
      <Container>
        {data.map((item,i)=>{
          return(
            <Assistance
              key={`${i}-${item.title}`}
              title={item.title} 
              body={item.body}
              imageUrl={item.imageUrl}
              linkUrl={item.linkUrl}
            />
          )
        })}
      </Container>
    </SectionNarrow>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${respond('m', `
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

  `)}
`

const data : IRepairs[] = [
  {
    title: "Motorreparatie",
    body: `Accusantium ab fuga illo voluptatum voluptatibus cupiditate! 
    Adipisci eum, autem laboriosam voluptate qui veritatis nulla numquam sapiente,
    repellendus beatae natus itaque incidunt tempora at praesentium magni totam.`,
    imageUrl: "/img/engine-1.jpg",
    linkUrl: "/diensten/motorreparatie"
  },
  {
    title: "Remsystemen",
    body: `Fuga illo voluptatum voluptatibus cupiditate! 
    Adipisci eum, autem laboriosam voluptate qui veritatis nulla numquam sapiente,
    repellendus beatae natus itaque.`,
    imageUrl: "/img/car-breaks-1.jpg",
    linkUrl: "/diensten/remsystemen"
  },
  {
    title: "Aircondition",
    body: `Accusantium ab fuga illo voluptatum voluptatibus cupiditate! 
    Adipisci eum, autem laboriosam voluptate qui veritatis nulla numquam sapiente,
    repellendus beatae natus itaque incidunt tempora at praesentium magni totam.`,
    imageUrl: "/img/airco-1.jpg",
    linkUrl: "/diensten/aircondition"
  },
  {
    title: "Schadeherstel",
    body: `Fuga illo voluptatum voluptatibus cupiditate! 
    Adipisci eum, autem laboriosam voluptate qui veritatis nulla numquam sapiente,
    repellendus beatae natus itaque.`,
    imageUrl: "/img/schadeherstel-1.jpg",
    linkUrl: "/diensten/schadeherstel"
  },
  {
    title: "Banden",
    body: `Fuga illo voluptatum voluptatibus cupiditate! 
    Adipisci eum, autem laboriosam voluptate qui veritatis nulla numquam sapiente,
    repellendus beatae natus itaque.`,
    imageUrl: "/img/tires-1.jpg",
    linkUrl: "/diensten/banden"
  },
  {
    title: "Aircondition",
    body: `Accusantium ab fuga illo voluptatum voluptatibus cupiditate! 
    Adipisci eum, autem laboriosam voluptate qui veritatis nulla numquam sapiente,
    repellendus beatae natus itaque incidunt tempora at praesentium magni totam.`,
    imageUrl: "/img/airco-1.jpg",
    linkUrl: "/diensten/aircondition"
  },

]