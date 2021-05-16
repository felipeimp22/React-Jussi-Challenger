import styled, { keyframes, css } from 'styled-components';
export const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%

`
export const UserLoginFormControl = styled.div`
display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  z-index: 2;

`
export const UserLoginFormControlLabel = styled.label`
margin-bottom: 5px;
  color: #979797;
  font-size: 16px;
  z-index: 2;
`

export const LoginError = styled.div`
display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  z-index: 2;

`

export const UserLoginFormControlInput = styled.input`
border-radius: 6px;
  border: 1.5px solid;
  height: 36px;
  padding: 5px 10px;
  border-color: #03ffa5;
  z-index: 1;
    &:focus {
  border: 1.8px solid;
  outline: 0;
  border-color: #05935f;
  z-index: 2;
    }

    `
export const UserLoginError = styled.div`
color: red;
z-index: 2;
`
export const CreateOrReturn = styled.div`
display:flex;
justify-content: space-between;


`

