import { useState } from "react";

function FormLogin(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {

        if(!email || !senha) {
            alert("Preencher os campos!")
        }

        try{
            //Envio para API
            //const response = await axios.post("/login", {
            //    email,
            //    senha
            //});
        }catch(error){
            console.error("Ocorreu um erro ao acessar a API")
        }
    
    }


    }

    return (
        <>
        <h1>Form de Login</h1>
        <div>
            <label>E-mail</label>
            <input onChange={(evento) => setEmail(evento.target.value)} type="email" placeholder="Digite seu e-mail" />
        </div>
        <div>
            <label>Senha</label>
            <input onChange={(evento) => setSenha(evento.target.value)} type="password" placeholder="Digite sua senha" />
        </div>

        <button onClick={() => handleLogin()}>Entrar</button>
        
        </>
    )


export default FormLogin;