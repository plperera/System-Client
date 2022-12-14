import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Menu from "../menu/Menu"

export default function Home (){
    const [user, setUser] = useState(true)
    const navigate = useNavigate()

    return (

        (user)?(
            <Container>
                <Menu/>
                <ContainerHome>a</ContainerHome>
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
const ContainerHome = styled.div`
    width:100%;
    height:100vh;
    background-color: #D9D9D9;
`