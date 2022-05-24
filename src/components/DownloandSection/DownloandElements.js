import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const DownloandContainer = styled.div`
background: gray;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position:relative;
z-index:1;
`;

export const DownloandContent = styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;


export const DownloandH1 = styled.h1`
color: #fff;
font-size:48px;
text-align:center;

@media screen and (max-width:768px) {
    font-size:40px;
}
@media screen and (max-width:480px) {
    font-size:32px;
}
`;


export const DownloandP = styled.p`
margin-top:24px;
color:#fff;
font-size: 24px;
text-align: center;
max-width: 600px;
@media screen and (max-width:768px) {
    font-size:24px;
}
@media screen and (max-width:480px) {
    font-size:18px;
}

`;

export const DownloandWrapper = styled.div`
margin-top:32px;
display: flex;
flex-direction:column;
align-items:center;
`;

export const ArrrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size:20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size:20px;
`;