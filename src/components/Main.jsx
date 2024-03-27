 import { useState } from "react";

 export default function Main(){
    const [nome, setNome] = useState("");  //primeira:acessa  setNome:modifica
    const [telefone, setTelefone] = useState("");
   const [listaContatos, setContatos] = useState([]);

   const registrar = () => {
    alert("deu certo!");
   }




return(
<main>

    <form>
    <label htmlFor="nome"> Nome:</label>
    <input type ="text"name="nome-contato"id="nome" value= {nome} onChange={  (event)  => setNome(event.target.value)}/>
    {nome}
    
    <label htmlFor= "telefone">Telefone:</label>
     <input type ="tel"name="nome-contato"id="telefone"value= {telefone} onChange={  (event)  => setTelefone(event.target.value)}/>
     {telefone}


    <button id="botaoSalvar">Salvar</button>
     </form>
</main>

);
}
//onChange dispara uma função
//setNome salva a informação