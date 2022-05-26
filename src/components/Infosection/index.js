import React from 'react'
import { InfoContainer,Image,Image1, InfoSelector1, Infoh1, InfoP, InfoSelector2, InfoSelector3, InfoSelector4, InfoSelector5 } from './InfoElements'

const InfoSection = () => {
  return (
    <InfoContainer id="Info">
        
        <InfoSelector1>
        <Infoh1>
            Crea tus propios quizzes
        </Infoh1>
        <InfoP>
        Diviertete creando y personalizando tu quizz<br/> 
        como quieras, con diferentes temáticas y <br/>
        modalidades. Comparte tu conocimiento con los demás.

        </InfoP>
        </InfoSelector1>
        
            <Image src="https://i.ibb.co/9tBsxK4/phone.jpg"></Image>
    
        <InfoSelector4>
        <Infoh1>
            Resuelve Quizzes de la comunidad
        </Infoh1>
        <InfoP>
        Puedes resolver diferentes quizzes hechos por estudiantes para estudiantes. Encontrarás quizzes de distintos niveles de dificultad en donde pondras a prueba tu capacidad y tu intelecto.
        </InfoP>
        </InfoSelector4>
        <Image1 src='https://i.ibb.co/9tBsxK4/phone.jpg'></Image1>
        <InfoSelector5>
            <Infoh1>Diseña tus quizzes<br/> a tu manera</Infoh1>
        </InfoSelector5>
    
    </InfoContainer>
  )
}

export default InfoSection