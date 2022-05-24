import React, { useState } from 'react'
import {Button} from '../ButtonElement'
import { DownloandContainer, DownloandH1,DownloandP, DownloandContent, DownloandWrapper, ArrowRight, ArrrowForward} from './DownloandElements'

const Downloand = () => {
    const [hover, setHover]= useState(false)
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <DownloandContainer id="home">
    <DownloandContent>
        <DownloandH1>Moderniza tu estudio con GoQuizz</DownloandH1>
        <DownloandP>Diviertete estudiando de manera interactiva de la mano de nuestra comunidad</DownloandP>
        <DownloandWrapper>
            <Button to="design" onMouseEnter={onHover} onMouseLeave={onHover}>
                Descargar {hover ? <ArrowRight/> : <ArrrowForward/>}

            </Button>
        </DownloandWrapper>
        
    </DownloandContent>
    </DownloandContainer>
    
  )
}

export default Downloand