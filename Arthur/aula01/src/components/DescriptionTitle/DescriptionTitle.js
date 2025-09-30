function DescriptionTitle({ titulo, descricao }) {
 
    const lerNoticia = () => {
        alert("Noticia Visualzada!");
    }
 
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
 
            <button onClick={lerNoticia}>Ler Noticia!</button>
        </div>
    )
}
 
export default DescriptionTitle;