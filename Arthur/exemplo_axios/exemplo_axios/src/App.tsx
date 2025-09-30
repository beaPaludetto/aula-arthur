import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface Produto {
  id: number,
  nome: string,
  quantidade: number
}



function App() {
  
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    //função para pegar produtos 
    getProdutos()
  }, [])

  //async => await
  async function getProdutos() {
    //acessar a api em nodejs
    const resposta = await axios.get("http://10.92.199.14:8080/produtos")

    //informações -> resposta.data
    console.log(resposta.data.produtos)
    setProdutos(resposta.data.produtos)

  }


  return (


    <>
      
      {produtos.map((prod) => (
        <div>
          <h1>{prod.id} - {prod.nome}</h1>
          <p>Quantidade no estoque: {prod.quantidade}</p>
        </div>
      ))}

    </>
  )
}

export default App
