import { useEffect, useState } from 'react';

function Listagem() {

    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            const dados = [
                {id: 1, nome: 'João'},
                {id: 2, nome: 'Giovanni'},
                {id: 3, nome: 'Matheus'},
            ]

            setUsuarios(dados)
            setLoading(false)
        }, 3000)


    })

    return (
        <div>
            <h1>Lista de Produtos</h1>

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {usuarios.map((usuario) => (
                        <li key={usuario.id}>{usuario.nome}</li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Listagem;