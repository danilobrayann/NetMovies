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
position: relative;
a{
    color:#ffffff;
    font-weight:600;
    cursor:pointer;
    text-decoration:none;
    font-size:28px;
}

&::after{
content: "";
height: 3px;
width: ${(props) => (props.isActive ? '100%' : 0)};
background-color:	#006400;
position: absolute;
bottom: -10px;
left: 50%;
transform: translateX(-50%);
transition: width 0.5s ease-in-out ; 
}

&:hover::after{
    width: 100%;
}
`
    
