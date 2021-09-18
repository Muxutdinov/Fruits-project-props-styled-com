import styled from "styled-components";
export const Main = styled.div`
display: flex;
border-bottom: 1px solid whitesmoke;
margin: 27px 20px;
`
export const Rasm = styled.div`
width: 100px;
height: 90px;
background-color: coral;
box-sizing: border-box;
border-radius: 8px;
`

export const Details = styled.div`
width: 100%;
/* height: 100%; */
display: flex;
flex-direction: column;
box-sizing: border-box;
`
export const Top = styled.div`
display: flex;
margin-left: 20px;
h1{
    padding: 0;
    margin: 0;
    font-size: 24px;
}
button{
    width: 70px;
    border-color: #2DCC70;
    background: #2DCC70;
    border-radius: 10px;
    outline: none;
    margin-left: auto;
    border-style: none;
}
`

export const Bottom = styled.div`
display: flex;
margin-top: auto;
`
export const Data = styled.div`
margin-left: 25px;
p{
    padding: 0;
    margin: 0;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0.3;
}
h1{
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 17px;
    font-family: sans-serif;
}
`
