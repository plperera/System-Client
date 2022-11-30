import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import userIcon from "../../assets/img/user-icon.svg"

export default function FormsCadastro (){

    const navigate = useNavigate()

    return (
        <Container>
            
            <Tittle>Cadastro</Tittle>

            <FormsStyle>
                <input placeholder="Nome"></input>
                <input placeholder="Email"></input>
                <input placeholder="Senha"></input>
                <input placeholder="Confirmação da Senha"></input>
            </FormsStyle>

            <FormsButton>Solicitar Acesso</FormsButton>
            <SubTittle onClick={() => navigate("/login")}>Ja tenho acesso, fazer login</SubTittle>

        </Container>
    )
}
const Container = styled.div`
    width:30%;
    height:80vh;

    background: rgba(76, 60, 99, 0.71);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.8px);
    -webkit-backdrop-filter: blur(9.8px);
    border: 1px solid rgba(76, 60, 99, 0.81);


    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    border-radius:40px;

    img {
        width: 150px;
        margin-bottom: 20px;
    }
`
const Tittle = styled.p`
    font-weight:700;
    color: #FFFFFF;
    font-size: 50px;
    margin-bottom: 60px;
`
const FormsStyle = styled.form`
    display: flex;
  flex-direction: column;
  width: 85%;
  position: relative;
  max-width: 600px;
  input {
    height: 58px;
    text-decoration: none;
    opacity: ${(props) => (props.isDisable ? 0.8 : 1)};
    border: none;
    margin-top: 25px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding-left: 40px;
    padding-right: 60px;
    outline: none;
    color: #FFFFFF;

    border-radius: 30px;

    background: rgba(196, 196, 196, 0.2);
    box-shadow: 2px 2px 20px rgba(196, 196, 196, 0.05);
    backdrop-filter: blur(9.3px);
   
  }
  input::placeholder {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.3);
    opacity: ${(props) => (props.isDisable ? 0.5 : 1)};
  }
`
const FormsButton = styled.div`
    width:85%;
    height: 75px;
    margin-top: 40px;

    display: flex;
    align-items:center;
    justify-content:center;

    background-color:#7875FF;
    border-radius: 50px;
    
    font-size:30px;
    font-weight:700;

    color: #D9D9D9;
`
const SubTittle = styled.div`
    color: #e5e5e54f;
    text-decoration:underline;
    font-size: 14px;
    margin-top: 10px;
`