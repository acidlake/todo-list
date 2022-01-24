<script>
  import H1 from "$lib/components/text/h1.svelte";
  import Paragraph from "$lib/components/text/p.svelte";
  import TodoItem from "$lib/components/list/index.svelte";

  export let items;
</script>
<style>
  .todo-list {
    list-style: none;
    overflow: hidden;
    padding: 1rem;
    background-color: #ededed;
    border: 1px solid #d6d6d6;
    border-radius: 1rem;
  }
</style>
<div id="todos">
  <H1 label="My Todos" />
  <div id="todo-list">
    {#if items.length > 0}
    <ul class="todo-list">
      {#each items as item}
        <TodoItem bind:item />
      {/each}
    </ul>
    {:else}
      <Paragraph text="No tienes tareas.." />
    {/if}
  </div>
</div>