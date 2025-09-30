import './App.css';
import Contador from './components/Contador/Contador';
import DescriptionTitle from './components/DescriptionTitle/DescriptionTitle';
import Digitador from './components/Digitador/Digitador';
import Listagem from './components/Listagem/Listagem';
import TextTitle from './components/TextTitle/TextTitle';
 
function App() {
  return (
    <div className="App">
      Olá Mundo!
 
      <TextTitle/>
      <DescriptionTitle
        titulo={"Aula de FrontEnd"}
        descricao={"Uma aula de frontend"}
        />
 
        <DescriptionTitle
        titulo={"Aula de BackEnd"}
        descricao={"Uma aula de backend"}
        />
 
        <Contador/>
 
        <Formulario/>
        <Digitador/>
        <Listagem/>
 
 
    </div>
  );
}
 
export default App;