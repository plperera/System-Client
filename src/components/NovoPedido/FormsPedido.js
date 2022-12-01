import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import userIcon from "../../assets/img/user-icon.svg"
import InputPedido from "./InputPedido"

export default function FormsLogin (){

    const navigate = useNavigate()
    const [lines, setLines] = useState([1, 2 , 3])

    return (
        <Container>
            
            <Tittle>Novo Pedido</Tittle>

            <PedidoForms>
                {
                lines.map( (e,i) => <InputPedido item={i + 1}key={i}/>)
                }
            </PedidoForms>

            <ButtonAddLine onClick={() => setLines([...lines, (lines.length + 1)])}>Adcionar mais um item</ButtonAddLine>


        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;

    width: 100%;
    height: 100%;

`

const PedidoForms = styled.form`

    width: 80%;
    display:grid;
    grid-template-columns: 1fr 3fr 1.5fr 1fr 2fr;
    column-gap: 1vw;
    row-gap: 2vh;

    max-height:34%;
    overflow: hidden;
    overflow-y: scroll;

    input {
        width:100%;
    }
`
const ButtonAddLine = styled.div`
    width:20%;
    height: 35px;
    margin-top: 20px;

    display: flex;
    align-items:center;
    justify-content:center;

    background-color:#7875FF;
    border-radius: 50px;
    
    font-size:15px;
    font-weight:700;

    color: #D9D9D9;
    cursor: pointer;
`
const Tittle = styled.div`
    width:80%;
    height:10%;
    font-size: 4vh;
    font-weight: 700;
    color: #a7a7a7;

    display:flex;
   align-items:center;
`
