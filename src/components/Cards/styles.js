import styled, { keyframes, css } from 'styled-components';
export const Card = styled.div`
display:flex;
background-color:#fcfcfc;
justify-content: center;
align-items: center;
flex-direction: column;
width:14vw;
height: 40vh;
border-radius: 5px;
button{
    margin-top: 2vh;
    background-color: transparent;
    cursor: pointer;
    color: #ee0e7d;
    border: 1px solid #ee0e7d;
    width: 10vw;
    height: 7vh;
    border-radius:25px;
    &:hover{
    background-color: #ee0e7d;
    color: white;


    }

}
-webkit-box-shadow: 1px 10px 16px 8px rgba(0,0,0,0.24); 
box-shadow: 1px 10px 16px 8px rgba(0,0,0,0.28);

`