import styled from 'styled-components'

export const FooterContainer = styled.div`
background:#948cdc;
display: flex;
margin-top:0px;
margin-bottom:0px;
height: 150px;
position:relative;
@media screen and (max-width:768px) {
   height:109px
}
`;

export const FooterP = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 54px;
display: flex;
align-items: center;
text-align: center;
position: absolute;
width: 576px;
height: 54px;
left: 39px;
top: 50%;
@media screen and (max-width:768px) {
   font-size:24px;
}
@media screen and (max-width:480px) {
    font-size:16px;
}
`

export const FooterInstagram = styled.div`
position: absolute;
width: 50px;
height: 50px;
right: 5%;
top: 50%;
@media screen and (max-width:480px) {
        right:2%;
    }
`

export const FooterFacebook = styled.div`
position: absolute;
width: 50px;
height: 50px;
right: 15%;
top: 50%;

`
export const FooterTwitter = styled.div`
position: absolute;
width: 50px;
height: 50px;
right: 25%;
top: 50%;
@media screen and (max-width:480px) {
        right:27%;
    }
`