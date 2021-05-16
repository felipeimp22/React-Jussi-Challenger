


import styled, { keyframes, css } from 'styled-components';
export const HeaderBar = styled.div`
z-index:99;
position: fixed;
    top:0;
    left: 0;
 font-family: 'Montserrat';
 height:10vh;
 min-height: 10vh;
 min-width:100%;
 width:99.6%;

/* background-color: #ffffff; */
background-color: white;


color:  #282828;
display:flex;
align-items:center;
justify-content: space-between;
div{
  display:flex;
align-items:center;
}
h1{
  /* padding:2rem auto; */
  font-size:24px;
font-weight:900;


/* padding: 8rem 0rem 8rem 1rem;  */
font-family: 'Montserrat';
}

button{
      /* flex:0.2; */
      height: 6vh;
      font-weight:600;
      /* margin-left: 1vw; */
      /* margin-right: 2vw; */
      width: 10vw;
      color: #282828;
      border-style: none;
      border: none;
      background: none;
      cursor: pointer;
      font-family: 'Montserrat';
      /* margin:2rem auto; */
    }
    button:hover{
      color: #03ffa5;

    }
`;


// export const SpaceBetwen = styled.div`
// display: flex;
// flex-direction: row
// `
export const Image = styled.img`
 margin-left: 2vw;
 margin-right: 2vw;

 width: 11vw;
 height: 5vh;
`
export const SearchDiv = styled.div`
margin-right: 2vw;
input{
  border-radius: 15px;
 border: 1px solid #ee0e7d;
 height: 4vh;
 
}
button{
  color: #ee0e7d;

}
input{
  border-width: 0.1px;
  border: 1px solid rgba(0, 0, 0,.08);
  height: 4.6vh;

}

`

export const SearchComponent = styled.div`
position: absolute;
/* display:flex; */
/* flex-direction: column; */
margin-left: -10vw;
 ul{
   background-color:  white;
   width: 14vw;
   /* min-height:40vh; */
   max-height:20vh;
   min-height:10vh;


  transform: translate(-96%, 74%);
  z-index:0;
  /* margin-top: -60vh; */
overflow: auto;
li{
  margin-top:1vh;
  margin-bottom:1vh;

  :hover{
    background-color: #CCC
  }
}
 }
 input{

   background-color: transparent;
  width: 12vw;
  /* margin-top:50vh; */

   border-width: 0.1px;
  border: 1px solid rgba(0, 0, 0,.08);
  height: 4.6vh;
 
 }

`