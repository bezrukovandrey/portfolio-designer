<script>
  import { onMount } from 'svelte';
  let portfolio = [];

  onMount(async () => {
    try {
      const response = await fetch('/../../src/db.json'); 
      const data = await response.json();
      portfolio = data.portfolio.filter(item => item.id >= 1 && item.id <= 3); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
});

let enlargedIndex = -1;

const enlarge = (index) => {
  enlargedIndex = index;
};

const resetSize = () => {
  enlargedIndex = -1;
};
</script>

<div class="items-stretch self-center flex flex-wrap w-full max-w-[960px] gap-4 mt-8 px-5 max-md:max-w-full max-md:justify-center max-md:flex-col">
  {#each portfolio as item}
    <div
      class="relative border-mainBrown border-2 rounded-3xl overflow-hidden min-h-[360px] grow"
      on:mouseover={() => enlarge(item.id)}
      on:mouseout={resetSize}
    >
      {#if enlargedIndex === item.id}
        <img alt="Item {item.title_en}" src={item.img} class="absolute rounded-3xl h-full w-full object-cover object-center inset-0 transition-transform duration-500 transform scale-110" />
      {:else}
        <img alt="Item {item.title_en}" src={item.img} class="absolute rounded-3xl h-full w-full object-cover object-center inset-0 transition-transform duration-500" />
      {/if}
      <h1 class="text-mainBeige font-ubuntu text-2xl absolute bottom-7 left-9 text-shadow">{item.title_ru}</h1>
    </div>
  {/each}
</div>

<style>
  .text-shadow {
    text-shadow: 2px 2px 3px rgb(39, 9, 9);
  }
</style>


