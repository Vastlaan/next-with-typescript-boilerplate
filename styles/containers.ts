import styled from 'styled-components'
import respond from 'styled-queries-ts'
import {FlexibleComponentProps, ThemeProps} from '../types'

// SECTIONS AND HEADERS

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: 1.4rem;
`
export const ConatinerNarrow = styled.div<FlexibleComponentProps>`
  padding: ${p=>p.padding?p.padding:'0'};
  max-width: 960px;
  margin: 0 auto;
`
export const SectionNarrowAnimated = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p:ThemeProps)=>p.color?p.color:'transparent'};
  padding: 1.4rem;
  transform: translateY(100px);
  opacity: 0;
  visibility: hidden;
`
export const ContainerNarrow = styled.div<FlexibleComponentProps>`
  max-width: 996px;
  width: 100vw;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: ${p=>p.padding?p.padding:'0'};
  ${()=>respond('l', 'width:996px;')}
`
export const FlexRow = styled.div<FlexibleComponentProps>`
  display:flex;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
  max-width: ${p=>p.wide?p.wide: 'auto'};
  flex-wrap: ${p=>p.wrap?p.wrap:'no-wrap'};
`
export const FlexCol = styled.div<FlexibleComponentProps>`
  display:flex;
  flex-direction: column;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
`
export const Line = styled.div<FlexibleComponentProps>`
  height: 1px;
  background-color: ${p=>p.color?p.color:p.theme.grey2};
  width: ${p=>p.width?p.width:'100%'};
  margin: ${p=>p.margin?p.margin:'0'};
`
export const Icon = styled.div<FlexibleComponentProps>`
  display:flex;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};  
  svg{
    font-size: 4.7rem;
    color: ${p=>p.color?p.color:p.theme.primary};
  }
`