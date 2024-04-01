 import { useState } from "react";

 export default function Main(){
    const [nome, setNome] = useState("");  //primeira:acessa  setNome:modifica
    const [telefone, setTelefone] = useState("");  //ou useState(0)
   const [listaContatos, setListaContatos] = useState([]);
   const [cpf, setCpf] = useState("");

   const registrar = (event) => {
      event.preventDefault();
    alert("Deu certo!");
    setListaContatos([...listaContatos,
      {
         nomeSalvo: nome,
         telefoneSalvo: telefone
      }

    ]);
   };
console.table(listaContatos);


return(
<main>
    <form>


    <label htmlFor="nome"> Nome:</label>
    <input type ="text"name="nome-contato"id="nome" value= {nome} onChange={  (event)  => setNome(event.target.value)}/>
    {nome}
    
    <label htmlFor= "telefone">Telefone:</label>
     <input type ="tel"name="nome-contato"id="telefone"value= {telefone} onChange={  (event)  => setTelefone(event.target.value)}/>
     {telefone}

     <label htmlFor= "cpfusuário">CPF:</label>
     <input type = "text"name="nome-contato"id="cpf"value= {cpf} onChange={  (event)  => setCpf(event.target.value)}/>
     {cpf}

    <button id="botaoSalvar">Salvar</button>
   

     </form>
   
</main>
);
}
//onChange dispara uma função
//setNome salva a informação