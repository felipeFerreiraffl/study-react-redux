import { useDispatch, useSelector } from "react-redux";
import { adicionarTarefa, removerTarefa } from "../tarefasSlice";
import styles from "./style.module.css"; // Importa os estilos do componente
import { useState } from "react";

export default function Tarefas() {
  const tarefas = useSelector((state) => state.tarefas); // Seleciona o estado de tarefas do Redux
  const dispatch = useDispatch(); // Hook para despachar ações
  const [novaTarefa, setNovaTarefa] = useState(""); // Estado local para nova tarefa

  // Função para adicionar uma nova tarefa
  const handleAdicionarTarefa = () => {
    // Verifica se a nova tarefa não está vazia
    if (novaTarefa.trim() === "") return;

    dispatch(adicionarTarefa({ id: Date.now(), titulo: novaTarefa })); // Despacha a ação para adicionar a tarefa
    setNovaTarefa(""); // Limpa o campo de entrada
  };

  return (
    <div className={styles.tarefas}>
      <h2>Lista de tarefas</h2>
      <input
        type="text"
        value={novaTarefa} // Valor do input controlado pelo estado local
        onChange={(e) => setNovaTarefa(e.target.value)} // Atualiza o estado local com o valor do input
        placeholder="Digite uma tarefa..."
      />
      <button onClick={handleAdicionarTarefa}>Adicionar tarefa</button>

      <ul>
        {/* Adiciona tarefas baseado no input, com auxílio do Slice */}
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.titulo}
            {/* Dispacha a ação de remover */}
            <button onClick={() => dispatch(removerTarefa(tarefa.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
