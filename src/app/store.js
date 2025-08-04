import { configureStore } from "@reduxjs/toolkit";
import tarefasReducer from "../feats/tarefasSlice"; // Importa o reducer de tarefas

// Middleware para persistir o estado de tarefas no localStorage
const persistedState = (storeAPI) => (next) => (action) => {
  const result = next(action); // Chama o próximo middleware ou o reducer
  const state = storeAPI.getState(); // Obtém o estado atual do store
  localStorage.setItem("tarefas", JSON.stringify(state.tarefas)); // Salva o estado de tarefas no localStorage
  return result; // Retorna o resultado da ação
};

// Criação de um store para armazenar estados globais
export const store = configureStore({
  // Criação de reducers, que recebem uma ação e um estado, retornando um novo estado
  reducer: {
    tarefas: tarefasReducer, // Associa o reducer de tarefas ao estado 'tarefas'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistedState), // Adiciona o middleware de persistência
});
