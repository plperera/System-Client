import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

import Login from "./login/Login"
import Cadastro from "./cadastro/Cadastro"
import Home from "./home/Home"
import Pedido from "./NovoPedido/NovoPedido"


export default function App (){


    return(       
        <BrowserRouter>

            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/login" element= {<Login/>}/>
                <Route path="/cadastro" element= {<Cadastro/>}/>
                <Route path="/pedido" element= {<Pedido/>}/>
            </Routes>

        </BrowserRouter>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    width:100%;
    height: 100vh;
`