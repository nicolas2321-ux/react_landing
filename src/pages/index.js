import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Downloand from '../components/DownloandSection'
import InfoSection from '../components/Infosection'
import Opinion from '../components/OpinionsSection'
import Footer from '../components/Footer'

const Home = () => {
const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
    setIsOpen(!isOpen)
} 

  return (
      <>
    
    <Downloand/>
    <InfoSection/>
    <Opinion/>
    <Footer/>

    </>
   
    
    
  )
}

export default Home