import { useState } from "react"
import styled from "styled-components"

export default function Menu (){

    const [visible, setVisible] = useState(true)

    return (
        <Container visible={visible} onClick={() => {setVisible(!visible)}}>
            <Title>
                {(visible)?(<>Bloco Forte</>):(<>{">"}</>)}
            </Title>
            <Options>
                {(visible)?(
                    <>
                        <div>Tela Incial</div>
                        <div>Novo Pedido</div>
                        <div>Estoque</div>
                        <div>Clientes</div>
                        <div>Pagamentos</div>
                        <div>Entregas</div>
                    </>
                ):(<></>)}
            </Options>
        </Container>
    )
}
const Container = styled.div`
    width:${props => props.visible ? ("20%"):("5%")};
    height:100vh;
    background: #151429;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
`
const Title = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    font-size: 40px;
    font-weight: 700;
    color: white;
    border-bottom: 1px solid white;

    width: 80%;
    height: 20%;
`
const Options = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;

    font-size: 20px;
    color: white;

    width: 80%;
    height: 80%;

    padding-top:8%;

    gap: 50px;
`