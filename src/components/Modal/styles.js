import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 4vh;
  margin-bottom: 4vh;
  background-color: transparent;
  border: 1px solid #03ffa5;
  min-height: 6vh;
  border-radius: 5px;
  cursor: pointer;
  :hover{
      background-color: #03ffa5;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
      color: gray
  }

`;
export const Container2 = styled.div`

display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 20vw;
  /* align-items: center; */
  h1, h2{
      color: gray;
  }

  button{
    height: 6vh;
    border: 1px solid #03ffa5;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    :hover{
        background-color: #03ffa5;
    }

  }
`