import styled from 'styled-components'
import Link from 'next/link'
import respond from 'styled-queries-ts'
import Brochure from './brochure'

export default function PanelComponent() {
  return (
    <Panel>

      <Categories>
        {data.map((cat, i)=><Category key={`cat-${i}`}>
          <label>{cat.name}</label>
          <Links>
            {cat.links.map((link, i)=><Link href={link.url} key={`link-${i}`}><li>
              {link.name}
            </li></Link>)}
          </Links>
        </Category>)}
      </Categories>
      
      <Brochure/>
      
    </Panel>
  )
}

const Panel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.7rem;
  margin-bottom: 2.7rem;

  ${respond('m',`
    display: grid;
    grid-template-columns: 1fr minmax(30rem, 1fr);
    grid-gap: 2.7rem;
  `)}
`
const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  `
  const Category = styled.div`
  margin-right: 2.7rem;
  display: flex;
  flex-direction: column;

  label{
    font-size: 1.6rem;
    letter-spacing: .2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${p=>p.theme.secondary};
    margin-bottom: .9rem;
  }
`
const Links = styled.ul`
  list-style: none;

  li{
    margin: .9rem 0;
    font-size: 1.6rem;
    letter-spacing: .10rem;
    color: ${p=>p.theme.grey1};
    cursor: pointer;
    transition: all .3s;
    font-weight: 300;

    &:hover{
      color: ${p=>p.theme.grey3};
    }
  }
`

const data = [
  {
    name: "Diensten",
    links: [
      {
        name: "Onderhoud",
        url: "/"
      },
      {
        name: "Reparaties",
        url: "/"
      },
      {
        name: "Banden",
        url: "/"
      },
      {
        name: "APK",
        url: "/"
      },
    ]
  },
  {
    name: "Bedrijf",
    links: [
      {
        name: "Over Ons",
        url: "/"
      },
      {
        name: "Contact",
        url: "/"
      },
      {
        name: "Blog",
        url: "/"
      },
      {
        name: "Vacatures",
        url: "/"
      },
    ]
  },
  {
    name: "Help",
    links: [
      {
        name: "Cookies",
        url: "/"
      },
      {
        name: "Voorwaarden",
        url: "/"
      },
      {
        name: "FAQ",
        url: "/"
      },
    ]
  }
]
