import styled, { keyframes, css } from 'styled-components';
export const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:flex-start;
/* align-items: center; */
/* background-color:red; */
width:13.6vw;
min-height:50vh;
height:360px;

margin: 10px;
border-radius: 5px;
border: 1px solid rgba(0,0,0,.08);

`
export const Title = styled.div`
font-size: 8px;
margin-left: 26px;
margin-bottom: 2vh;


`
export const Icon = styled.div`
width:100%;
display:flex;
/* justify-content: center; */
align-items: center;

div{
    display:flex;
justify-content: center;
align-items: center;
background-color:#efefef;
width:6vw;
height:14vh;
border-radius: 50%;
margin-bottom:4vh;
}
margin-left: 12px;
margin-top: 12px;


`
export const Buttom = styled.button`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border: 0px none black;
height: 6vh;
width: 12vw;
border-radius: 5px;
background-color: #03ffa5;
margin-left: 12px;
font-weight: bolder;
&:hover{
    opacity: .5;
}
margin-bottom: 12px;

`
export const Desc = styled.div`
margin-top: -4vh;
color:#ee0e7d;
font-size: 10px;
margin-left: 26px;
margin-bottom: 2vh;


`

export const List = styled.div`
margin-top: -2vh;
color:gray;
margin-bottom: 2vh;


/* margin-left: -80px; */

`