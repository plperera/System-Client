import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import userIcon from "../../assets/img/user-icon.svg"

export default function InputPedido({item}){

    const navigate = useNavigate()

    return ( 
        <>
            
            <InputStyle placeholder={"COD " + item}></InputStyle>
            <InputStyle placeholder={"Produto " + item}></InputStyle>
            <InputStyle placeholder={"Valor Un. " + item}></InputStyle>
            <InputStyle placeholder={"Qtde. " + item}></InputStyle>
            <InputStyle placeholder={"SubTotal " + item}></InputStyle>


        </>
    )
}

const InputStyle = styled.input`

    height: 58px;
    text-decoration: none;
    border: none;
    outline: none;

    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding-left: 20px;
    
    color: #171717;

    border-radius: 10px;
    border: 1px #a7a7a7 solid;

    background: white;
   
  ::placeholder {
    font-size:15px;
    font-weight: 500;
    color: #a7a7a7;
  }
`

