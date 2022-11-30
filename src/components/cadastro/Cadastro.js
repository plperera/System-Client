import styled from "styled-components"
import FormsCadastro from "./FormsCadastro"

export default function Cadastro (){
    return (
        <Container>
            <div></div>
            <FormsCadastro/>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    height:100vh;
    background: radial-gradient(circle, rgba(21,20,41,1) 0%, rgba(0,1,1,1) 100%);

    display:flex;
    align-items:center;
    justify-content:center;
`