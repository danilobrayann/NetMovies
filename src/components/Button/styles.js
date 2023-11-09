import styled, {css} from "styled-components";


const buttonStyles = css`

border: 3px solid #ffffff;
background-color:transparent;
color: #ffffff;
border-radius:30px;
padding:10px 20px ;
cursor: pointer;
font-size:20px;
font-weight:500;

&:hover{
    background-color:#ffffff;
    color:red;
}

`



export const ButtonWite = styled.button`
${buttonStyles}

`



export const ButtonRed = styled.button`
${buttonStyles}

background-color:red;
border: 4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

&:hover{
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%); 
    background-color:red;
    color:#ffffff;
}
`

