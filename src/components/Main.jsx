 import { useState } from "react";

 export default function Main(){
    const [nome, setNome] = useState("");  //primeira:acessa  setNome:modifica
    const [telefone, setTelefone] = useState("");

return(
<main>
    <p> seu nome:</p>
    <form>
        <button>
        </button>
    <input type ="text"name="nome-conato"id="nome" value= {nome} onChange={  (event)  => setNome(event.target.value)}/>
     {nome}
<p>seu telefone:</p>
     <input type ="tel"name="nome-conato"id="telefone"value= {telefone} onChange={  (event)  => setTelefone(event.target.value)}/>
     {telefone}
    
     </form>
</main>

);
}