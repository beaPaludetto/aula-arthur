import { useEffect, useState } from "react";
 
 
// exemplo de useState
function Contador(){
 
    const [contador,setContador] = useState(0);
 
 
    // arrow function
    const incrementar = () => {
        // valor antrior + 1
        setContador(contador + 1); 
 
    }


    useEffect(() => {
        console.log("É executado toda vez que o valor é trocado...")
        console.log(contador)

    }, [contador])

// contador ${contador}
    retur (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>incrementar</button>
        </div>
       
    )
}
 
export default Contador;    