import styled, { keyframes, css } from 'styled-components';
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;

    width: 100%;
    height:  99.8vh;
    background-color: #03ffa5;

`
export const Bottom = styled.div`
background-color: #e5e5e5;
height:10vh;
display:flex;
justify-content: center;

div{
    display:flex;
    width:80%;
    align-items: center;
    justify-content:space-around;
    flex-direction: row;
    img{
        width:10%;
        height:40%;

    }
}
`
export const BackGroundBanner = styled.div`
display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;

`
export const Content = styled.div`
font-family: 'Montserrat';
font-weight: bolder;
/* background-color: red; */
width: 70%;
 height: 68%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`
export const TextContent = styled.div`
/* background-color: blue; */

width: 48%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
div{
height:57.5vh;
  

}

`

export const Content2 = styled.div`
display: flex;
 flex-direction: column;
  /* background-color: pink; */
  justify-content: space-between;
   height: 45%;
  
   button{
    width:12vw;
    height:6vh;
    border: 1px solid black;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    &:hover{
    background-color:  rgba(255, 255, 255,0.9);
    border: 1px solid #00633e;
 
    color: #00633e;
    }
}
`
export const Content3 = styled.div`
display: flex;
 flex-direction: column;
 /* background-color: green; */
`
export const Container = styled.div`
width: 84%;
/* background-color: purple; */
 font-size: 24px;

`
export const CardContainer = styled.div`
display:flex;
/* background: purple; */
flex-direction: row;
margin-right: 2vw;

`

