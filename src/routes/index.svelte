<script>
  import core from "$lib/functions"
  import AddTodo from "$lib/components/form/AddTodo.svelte";
  import TodoList from "$lib/components/todos/index.svelte";
  import H1 from "$lib/components/text/h1.svelte";
  import Paragraph from "$lib/components/text/p.svelte";
  import { todos } from "$lib/stores/todosData";

  let todo = {
    name: '',
    isDone: false
  }

  const addTodo = function(){
    todo = core.addTodo({todos: $todos, todo})
  }
</script>
<H1 label="Todo List en Svelte" />
<Paragraph text="Prueba de Svelte" />
<AddTodo addTodo={addTodo} bind:todo  />
<TodoList items={$todos} />