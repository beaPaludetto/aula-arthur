import { useState } from "react";
 
 
function Formulario() {
  // campo p amarzenar valor do input
 
  const [nome, setNome] = useState("");
 
// trocar o valor do nome
  const handleTrocarNome = (evento) => {
    console.log(evento.target.value); // pegar valor digitado
 
    setNome(evento.target.value);                                                                
 
  }
 
  // disparar o formulario
  const handleSubmit = (evento) => {
    evento.preventDefault() // parar recarregar automatico
    alert(`Nome do usuario: ${nome}`);
 
  }
 
  return (
    <form onSubmit={handleSubmit}>
        <label>Digite seu nome:</label>
        <input type="text" placeholder="Digite seu nome..." ></input>
 
        <button type="submit">Enviar</button>
       
    </form>
  )
}
 
export default Formulario;