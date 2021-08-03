import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export default function LogoComponent({logoUrl}: {logoUrl?: string}) {
    return (
        <Link href='/'>
            <Logo>
                <Image src={logoUrl || '/img/logo.png'} alt='bedrijfs logo' layout='fill' priority={true}/>
            </Logo>
        </Link>
    )
}
const Logo = styled.div`
    width: 18rem;
    height: 5rem;
    position: relative;
    cursor:pointer;
    margin: 1.4rem 2.7rem 1.4rem 0;
`