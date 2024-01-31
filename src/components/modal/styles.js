import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index:9;
background-color: rgba(0, 0, 0, 0.6); 
position: absolute;
display:flex;
justify-content: center;
align-items: center;

`;



export const Container = styled.div`
background-color: #000;
width: 50%;
justify-content:center;
align-items:center;
position: fixed;
padding: 50px;
max-width: 75rem;

iframe{
    border: none;
}
`;