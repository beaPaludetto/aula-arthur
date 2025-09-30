import { useState } from "react";
 
function Digitador() {
 
 
    // const [valor, setValor]
    const [digitador, setDigitador] = useState(0);
 
    // useState ( tipo )
    const handleAtualizarDigitador = (evento) => {
        setDigitador(evento.target.value);
    }
 
 
    return (
        <>
           <div>
            <label>Digite o Digito:</label>
            <input type="text" onChange={handleAtualizarDigitador} placeholder="Digite o digito..." />
           </div>
        </>
    );
}
 
export default Digitador;
 