import { writable } from "svelte/store";


export const todos = writable([]);
export const updateTodo = function(todosData){
  if(!todosData) return false;
    todos.update(() => todosData);
    return;
}