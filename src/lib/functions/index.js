import { updateTodo } from "$lib/stores/todosData";

let core = {
  addTodo: function(params){
    if(!params) return false;
    const { todos, todo } = params;
    updateTodo([...todos, todo]);
    return { name: '', isDone: false }
  },
}

export default core;