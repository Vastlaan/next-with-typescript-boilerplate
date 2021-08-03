import Header from './header'
import Intersection from '../utils/intersection'
import Services from './services'
import Repairs from './repairs'
import VideoBackground from '../utils/background_video'
import {IoSpeedometer, IoCarSportSharp} from 'react-icons/io5'

export default function LandingPage(){
  return (
    <>
     
      <Header headings={['De garage in den Bosch voor al uw onderhoud en reparaties ','Vakkundige monteurs voor betaalbaar onderhoud.']} />
     
      <Intersection 
        title='RR Repair - reparatie en onderhoud binnen Nederland' 
        category='reparatie & onderhoud'
        body='Auto Onderhoud of Reparatie nodig in den Bosch. Iedere klus pakken wij professioneel aan. Op al ons werk en onderdelen heeft u standaard garantie.' 
        icon={<IoCarSportSharp/>}
      />

      <Services />

      <Intersection 
        title='Spoed Reparatie' 
        category='reparatie & onderhoud'
        body='Problemen met uw auto die meteen opgelost moeten worden? Bel ons om te bespreken wat de mogelijkheden zijn.' 
        icon={<IoSpeedometer/>}
      />

      <Repairs />

      <VideoBackground heading='Rijd weer comfortabel in uw auto!' para='Wij repareren elk merk auto en zijn niet bang voor uitdagingen!'/>

      <Intersection 
        title='Spoed Reparatie' 
        category='reparatie & onderhoud'
        body='Problemen met uw auto die meteen opgelost moeten worden? Bel ons om te bespreken wat de mogelijkheden zijn.' 
        icon={<IoSpeedometer/>}
      />
      
    </>
  )
}
