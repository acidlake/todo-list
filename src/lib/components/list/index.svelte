<script>
  export let item = {
    name: '',
    isDone: null
  };
</script>
<style>
  .isDone {
    text-decoration: line-through;
  }
  .list {
    font-size: 1.5rem;
    color: rgb(72, 72, 72);
    border-bottom: 1px solid rgb(223, 223, 223);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: rgb(247, 247, 247);
  }
  .list:last-child {
    border-bottom: none;
  }
</style>
<li class="list {item.isDone? 'isDone' : ''}">{item.name} <input bind:checked={item.isDone}  type="checkbox"></li>