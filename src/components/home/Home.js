import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home (){
    const [user, setUser] = useState(false)
    const navigate = useNavigate()


    function changeToLogin(){
        navigate("/login")
    }

    return (

        (user)?(<>a</>):(
        <div>Sua sessão foi encerrada</div>
        )
    )
}