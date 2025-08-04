/* ---------- Slice ---------- */

import { createSlice } from "@reduxjs/toolkit";

const savedState = localStorage.getItem("tarefas"); // Verifica se há tarefas salvas no localStorage e as recupera
const initialState = savedState ? JSON.parse(savedState) : []; // Se houver, usa como estado inicial, caso contrário, inicia com um array vazio

// Criação de um slice para gerenciar tarefas (actions, reducers e estado)
const tarefasSlice = createSlice({
  name: "tarefas",
  initialState: initialState, // Estado inicial do slice
  reducers: {
    adicionarTarefa: (state, action) => {
      // Adiciona uma nova tarefa ao estado
      state.push(action.payload); // action.payload deve conter um objeto com id e titulo
    },
    removerTarefa: (state, action) => {
      // Remove uma tarefa do estado pelo seu ID
      return state.filter((tarefa) => tarefa.id !== action.payload); // action.payload deve ser o ID da tarefa a ser removida
    },
  },
});

export const { adicionarTarefa, removerTarefa } = tarefasSlice.actions; // Exporta as ações para serem usadas em outros componentes
export default tarefasSlice.reducer; // Exporta o reducer para ser usado no store
