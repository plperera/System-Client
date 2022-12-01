import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Menu from "../menu/Menu"
import FormsPedido from "./FormsPedido"

export default function Pedido (){
    const [user, setUser] = useState(true)
    const navigate = useNavigate()

    return (

        (user)?(
            <Container>
                <Menu/>
                <ContainerPedido>
                    <FormsPedido/>
                </ContainerPedido>
            </Container>

        ):(
        <div>Sua sessão foi encerrada</div>
        )
    )
}
const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;

`
const ContainerPedido = styled.div`
    width:100%;
    height:100vh;
    background-color: #D9D9D9;
`