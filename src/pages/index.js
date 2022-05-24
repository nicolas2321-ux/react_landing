import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Downloand from '../components/DownloandSection'


const Home = () => {
const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
    setIsOpen(!isOpen)
} 

  return (
      <>
    <Navbar/>
    <Downloand/>
    </>
   
    
    
  )
}

export default Home