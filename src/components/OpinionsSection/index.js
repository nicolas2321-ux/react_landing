import React from 'react'
import { OpinionContainer, OpinionContainer1, OpinionContainer2, OpinionContainer3,
    OpinionContainer4, OpinionContainer5,OpinionContainer6, 
    OpinionContainer7,BgInfo,BgWaveInfo,OpinionContainer8,OpinionH1, OpinionP } from './OpinionElements'

const Opinion = () => {
  return (
    <OpinionContainer id="Last">
        <BgWaveInfo></BgWaveInfo>
        <BgInfo>
        <OpinionContainer4>
            <OpinionH1>Lo que los expertos<br/> opinan de Quizzes</OpinionH1>
        </OpinionContainer4>
        <OpinionContainer1>
            <OpinionP>
                <b>Marcela Portillo</b><br/>
                Con Go Quizz aprendi a bañarme
            </OpinionP>
        </OpinionContainer1>
        <OpinionContainer2>
            <OpinionP>
                <b>Katya Agustin</b><br/>
                Gracias a Go Quizz tengo 3 doctorados y 2 maestrias

            </OpinionP>
        </OpinionContainer2>
        <OpinionContainer3>
            <OpinionP>
                <b>Nicky</b><br/>
                Gracias a Go Quizz soy mas guapo de lo que ya soy

            </OpinionP>
        </OpinionContainer3>
        <OpinionContainer5>
            <OpinionP>
                <b>Omar Escamilla</b><br/>
                Todos los recreos ocupaba Go quizz

            </OpinionP>
        </OpinionContainer5>
    </BgInfo>
    </OpinionContainer>
  )
}

export default Opinion