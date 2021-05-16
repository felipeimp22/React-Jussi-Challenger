import styled from 'styled-components';

export const Container = styled.div`
    /* background-color: gray; */
    height: 100vh;
    width: 100%;
    background-color: #03ffa5;
    
`

export const Container2 = styled.div`
   display: flex;
flex-direction: row;

    /* background-color: gray; */
    overflow: auto;
    
`


export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;

background-color: white;
margin-bottom: 2vh;
margin-top: 2vh;
margin-left: 2vw;
margin-right: 2vw;
border-radius: 5px;
min-width:10vw;
min-height:20vw;
/* border: 1px solid black; */
-webkit-box-shadow: -2px 4px 11px 3px rgba(0,0,0,0.48); 
box-shadow: -2px 4px 11px 3px rgba(0,0,0,0.48);

elevation: 4;
img{
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 2vw;
    margin-bottom: 2vw;


    width: 10vw;
}

`

export const BTN = styled.button`
border: 1px solid #03ffa5;
background-color: transparent;
min-height: 10vh;
min-width: 20vw;
border-radius: 5px;
cursor: pointer;
background-color: #03ffa5;

:hover{
    background-color: #03ffa5;
    :active{
        opacity:0.2
    }
}

`