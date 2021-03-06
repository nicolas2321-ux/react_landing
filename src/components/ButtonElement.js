import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
border-radius:10px;
background: ${({primary})=> (primary ? '#074b87': '#9140FF')};
white-space: nowrap;
padding: ${({big})=>(big ? '14px 48px': '12px 30px')};
font-size: ${({fontBig})=>(fontBig ? '20px': '16px')};
color:white;
outline: none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background:${({primary})=> (primary ? '#9140FF': '#074b87')};
}

`