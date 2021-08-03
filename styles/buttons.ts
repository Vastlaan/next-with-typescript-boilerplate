import styled from 'styled-components'
import { FlexibleComponentProps } from "../types"
import { fonts } from './fonts'

 export const ButtonFull = styled.button<FlexibleComponentProps>`
  border-radius: 0px;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: .9rem 1.4rem;
  border: none;
  color: ${p=>p.theme.white};
  font-family: ${fonts.heading};
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: .15rem;
  text-transform: uppercase;
  width: ${p=>p.width?p.width:'auto'};
  box-shadow: 0 .2rem .2rem .2rem rgba(0,0,0,.2);
  transition: all .3s;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg,${p=>p.color?p.color:p.theme.primary} 40%,${p=>p.color?p.color:p.theme.primary} 60%,${p=>p.color?p.color:p.theme.primary} 70%) ${p=>p.color?p.color:p.theme.primary};
  &:hover{
      background: 
      linear-gradient(90deg,${p=>p.color?p.color:p.theme.primary} 40%,rgba(255,255,255,0.3) 60%,${p=>p.color?p.color:p.theme.primary} 70%) rgba(255,255,255,.3);
      background-size:300% 100%;
      animation: shine .9s ease-out;
  }
`

export const ButtonPrimary = styled.button<FlexibleComponentProps>`
  border-radius: 0px;
    padding: 0.9rem 2.2rem;
    margin: ${(p) =>p.margin?p.margin:"0"};
    background-color: ${(p) => p.theme.secondaryLight};
    position: relative;
    z-index: 2;
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: .15rem;
    color: ${(p) => p.theme.white};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(p)=>p.wide?p.wide:'auto'};
    box-shadow: 0 0 1rem rgba(0,0,0,.3);
    svg {
        margin-right: 1.4rem;
        font-size: 2.2rem;
    }
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(p) => p.theme.primary};
        z-index: -1;
        transition: all 0.3s;
    }
    &:hover {
        &::after {
            top: 0;
        }
    }
`;

export const ButtonLink = styled.p<FlexibleComponentProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.9rem;
  font-family: ${fonts.heading};
  font-weight:300;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .15rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'};
  transition: all .3s;
  &:hover{
      color: ${p=>p.theme.secondary};
  }
`