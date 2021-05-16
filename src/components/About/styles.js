import styled, { keyframes, css } from 'styled-components';
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
width: 100vw;
`
export const AboutContainer = styled.div`
display: flex;
flex-direction: row;
/* background-color: red; */
height:100%;
width: 58vw;

justify-content: space-between;

font-size: 14px;
font-weight:600;
word-spacing: 1px;
p{
    margin-top: 2vh;

line-height: 24px;
}
img{
width:36vw;
height:34vw;

margin-top: 4vh;

}


`
export const Button = styled.button`
border: 1px solid black;
border-radius: 5px;
cursor: pointer;
width: 10vw;
height: 6vh;
margin-top: 2vh;
background-color: transparent;
:hover{
    background-color: #CCC
}

`
