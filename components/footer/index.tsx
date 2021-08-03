import styled from 'styled-components'
import Brand from './brand'
import Panel from './panel'
import Copyrights from './copyrights'
import {ContainerNarrow, respond, FlexRow} from '../../styles'

export default function FooterComponent() {
    return (
        <Footer>

            <ContainerNarrow padding='1.4rem'>
                <Brand />
                <Panel />
            </ContainerNarrow>

            <Copyrights/>

        </Footer>
    )
}

const Footer = styled.footer`
    background-color: ${p=>p.theme.black};
`
