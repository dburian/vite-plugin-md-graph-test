<script lang="ts">
  import data from 'virtual:vite-plugin-md-graph/graph';

const a_var = 'a_json'
let json_module = null;
async function load_json() {
  json_module = await import(`$lib/assets/${a_var}.json`)
  console.log(json_module)
}

</script>

<main>
  <a href="/notes/README">A README note</a>
  <a href="/static_route">A static route</a>
  <a href="https://www.google.com">Google</a>
  <ul>
    {#each data.vertices as note} 
      <li><a href="/notes/{note.id}">{note.filename}</a></li>
    {/each}
  </ul>
  <button on:click={load_json}>Load_json</button>
  {#if json_module != null}
    {json_module.text}
  {/if}

</main>

<style lang="scss">
</style>
