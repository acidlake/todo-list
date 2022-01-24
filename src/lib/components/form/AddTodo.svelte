<script>
  //
  export let todo, addTodo;
</script>
<div>
  <input type="text" bind:value={todo.name}>
  <input type="checkbox" bind:checked={todo.isDone}>
  <button on:click={addTodo}>Agregar Tarea</button>
</div>