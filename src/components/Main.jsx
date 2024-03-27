 import { useState } from "react";

 export default function Main(){
    const [nome, setNome] = useState("");  //primeira:acessa  setNome:modifica
    const [telefone, setTelefone] = useState("");

return(
<main>

    <form>
    <label> seu nome:</label>
    <input type ="text"name="nome-contato"id="nome" value= {nome} onChange={  (event)  => setNome(event.target.value)}/>
    {nome}
    
    <label>seu telefone:</label>
     <input type ="tel"name="nome-contato"id="telefone"value= {telefone} onChange={  (event)  => setTelefone(event.target.value)}/>
     {telefone}


    <button id="botaoSalvar">Salvar</button>
     </form>
</main>

);
}