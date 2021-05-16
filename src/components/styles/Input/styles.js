import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 4vw;

color: white;
p{
margin-bottom: -0.5vh
}
`
export const InputComponent = styled.input`
  z-index:1;

  outline: 0;
  border-width: 0 0 2px;
  border-color: #03ffa5;
  background-color: transparent;

  color: white;
  width: 30vw;
  height: 4vh;

  :focus{
    border-color: white;
    height: 6vh;
  }

`
export const Container2 = styled.div`
 width: 30vw;
display: flex;
flex-direction: row;
justify-content: space-between;
button{
    border: 0px;
  background-color: transparent;
  color:#03ffa5;
  cursor: pointer;
  margin-bottom: -6vh;
  z-index:99;
  :active{
    opacity:0.4
  }

}
`
