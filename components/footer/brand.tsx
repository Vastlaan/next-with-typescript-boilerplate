import styled from 'styled-components'
import Image from 'next/image'

export default function BrandComponent() {
  return (
    <Brand>
      <ImageContainer>
        <Image src='/img/logo-white.png' alt='logo' layout='fill'/>
      </ImageContainer>
    </Brand>
  )
}
const Brand = styled.div`
  width: 100%;
  display: flex;
  margin: 2.7rem 0;
`
const ImageContainer = styled.div`
  width: 12rem;
  height: 3rem;
  position: relative;
`