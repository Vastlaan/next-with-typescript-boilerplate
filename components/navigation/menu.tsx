import Link from 'next/link'
import styled from 'styled-components'
import {fonts} from '../../styles'
import respond from 'styled-queries-ts'
import { FlexibleComponentProps } from '../../types'
import {FaChevronDown, FaChevronRight} from 'react-icons/fa'
import Logo from './logo'

export default function MenuComponent() {
    return (
        <Menu>
            <Logo/>
            <li>
                <Link href='/'>
                    <MenuLink role='link'>Home</MenuLink>
                </Link>
            </li>
            <li>
                <MenuNested>
                    <p>
                        Diensten
                        <FaChevronDown/>
                    </p>
                    <ul>
                        <Link href='/onderhoud'>
                            <li role='link'>
                                <FaChevronRight/>
                                Onderhoud & Reparatie
                            </li>
                        </Link>
                        <Link href='/apk'>
                            <li role='link'>
                                <FaChevronRight/>
                                APK
                            </li>
                        </Link>
                        <Link href='/banden'>
                            <li role='link'>
                                <FaChevronRight/>
                                Banden Service
                            </li>
                        </Link>
                    </ul>
                </MenuNested>
            </li>
            <li>
                <Link href='/about'>
                    <MenuLink role='link'>Over Ons</MenuLink>
                </Link>
            </li>
            <li>
                <Link href='/contact'>
                    <MenuLink role='link'>Contact</MenuLink>
                </Link>
            </li>
        </Menu>
    )
}

const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    background-color: ${p=>p.theme.white};
    

    ${()=>respond('m', `
        flex-direction: row;
        padding: 0 1.4rem;
        align-items: center;
        max-width: 996px;
        margin: 0 auto;
    `)}
`
const MenuLink = styled.button<FlexibleComponentProps>`
    margin: ${p=>p.margin?p.margin: '1.4rem'};
    padding: .9rem 0;
    border: none;
    background-color: ${p=>p.theme.white};
    color: ${p=>p.theme.black};
    font-size: 1.9rem;
    font-weight: 600;
    font-family: ${fonts.heading};
    letter-spacing: .15rem;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    ${p=>respond('m', `margin: ${p.margin?p.margin: '0 1.4rem'};`)}
    &::before{
        content: "";
        position: absolute;
        top: -10rem;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${p=>p.theme.primary};
        transition: all .3s;
    }
    &:hover{
        &::before{
            top: .6rem;
        }
    }
`

const MenuNested = styled.div<FlexibleComponentProps>`
    position: relative;
    background-color: ${p=>p.theme.white};
    margin: ${p=>p.margin?p.margin: '0 1.4rem'};
    padding: .9rem 0;
    ${p=>respond('m', `margin: ${p.margin?p.margin: '0 1.4rem'};`)}
    &:hover{
        ul{
            top: 100%;
        }
    }
    p{
        color: ${p=>p.theme.black};
        font-size: 1.9rem;
        font-family: ${fonts.heading};
        letter-spacing: .15rem;
        font-weight: 600;
        text-transform: uppercase;
        svg{
            margin-left: .9rem;
            color: ${p=>p.theme.primary};
        }
    }
    ul{
        position: static;
        top: -1000%;
        left: -1.4rem;
        width: 250%;
        padding: 1.4rem 1.4rem 0 0;
        list-style: none;
        background-color: ${p=>p.theme.white};
        transition: top 0s;
        ${p=>respond('m', `position: absolute;padding: 1.4rem;`)}
        li{
            margin: 1.4rem 0;
            color: ${p=>p.theme.black};
            font-size: 1.9rem;
            font-family: ${fonts.heading};
            letter-spacing: .15rem;
            text-transform: uppercase;
            cursor: pointer;
            svg{
                margin-right: .9rem;
                color: ${p=>p.theme.primary};
                transition: all .3s;
            }
            &:hover{
                svg{
                    margin-left: .6rem;
                    margin-right: .3rem;
                }
            }
        }
    }
`