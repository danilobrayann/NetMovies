import styled from "styled-components";

export const Container = styled.div`
z-index: 9;
position: fixed;
top: 0;
display: flex;
padding:10px 50px;
justify-content: space-evenly;
align-items: center;
width: 100%;

color: white;
img{
    width: 5vw;
}
`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap:50px;

`


export const Li = styled.li`

a{
    color:#ffffff;
    font-weight:600;
    cursor:pointer;
    text-decoration:none;
    font-size:28px;
}


`
    
