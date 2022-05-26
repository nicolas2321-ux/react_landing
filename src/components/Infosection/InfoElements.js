import styled from 'styled-components'

export const InfoContainer = styled.div`
background:#f6f7f6;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 1200px;
position:relative;
z-index:1;

`

export const Infoh1 = styled.h1`
color: #000;
font-size:36px;
font-weight:bold;
text-align:center;

@media screen and (max-width:768px) {
    font-size:40px;
}
@media screen and (max-width:480px) {
    font-size:32px;
}
`

export const InfoP = styled.p`
margin-top:24px;
color:#000;
font-size: 24px;
text-align: center;
max-width: 600px;
@media screen and (max-width:768px) {
    font-size:24px;
}
@media screen and (max-width:480px) {
    font-size:18px;
}
`
export const InfoSelector1 = styled.div`
  z-index:3;
max-width:1200px;
left:80px;
top:300px;
position:absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const InfoSelector2 = styled.div`
    grid-area: 4 / 2 / 5 / 3;
`

export const InfoSelector3 = styled.div`
    grid-area: 3 / 4 / 4 / 5;
    `
export const InfoSelector4 = styled.div`
      z-index:3;
max-width:1200px;
left:700px;
bottom:200px;
position:absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const InfoSelector5 = styled.div`
     z-index:3;

top:50px;
position:absolute;
padding: 8px 24px;
display: flex;
`
export const Image = styled.img`

object-fit: fill;
max-height:500px;
max-width:500px;
position:relative;
left:-50px;
top:300px;
`
export const Image1 = styled.img`

object-fit: fill;
max-height:500px;
max-width:500px;
position:relative;
left:100px;
top:-150px;
`