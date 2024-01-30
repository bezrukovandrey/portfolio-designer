<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let currentPath;

  onMount(() => {
    currentPath = location.pathname;
  });

  function switchToRussian() {
    const newPath = currentPath.replace('/en', '/');
    goto(newPath);
  }
</script>

<div class="justify-between items-stretch bg-mainBeige  border-mainBrown border-b-2 self-stretch flex w-full gap-5 pl-12 py-4 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
  <a href='/en'><img alt="Logo of Duck Crossing" src="../src/assets/logo.png" class="aspect-auto object-contain object-center h-[60px] w-[120px] overflow-hidden max-w-full" /></a>
  <div class="justify-between items-stretch self-center flex gap-5 my-auto px-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
    <button><a href="#" on:click={switchToRussian} class="text-mainBeige text-m font-bitter font-medium whitespace-nowrap justify-center items-stretch bg-mainBrown hover:bg-lightBrown active:bg-darkBrown grow px-5 py-3 rounded-lg">RU</a></button>
    <a href="/shop/en" class="text-mainBrown text-m font-bitter font-medium my-auto {currentPath === '/shop/en' ? 'border-b-2 border-mainBrown' : ''}">SHOP</a>
    <a href="/portfolio/en" class="text-mainBrown text-m font-bitter font-medium my-auto {currentPath === '/portfolio/en' ? 'border-b-2 border-mainBrown' : ''}">PORTFOLIO</a>
    <a href="/community/en" class="text-mainBrown text-m font-bitter font-medium my-auto {currentPath === '/community/en' ? 'border-b-2 border-mainBrown' : ''}">COMMUNITY</a>
    <button><a href="/cart/en" class="text-mainBeige text-m font-bitter font-medium whitespace-nowrap justify-center items-stretch bg-mainBrown hover:bg-lightBrown active:bg-darkBrown grow px-5 py-3 rounded-lg">CART</a></button>
  </div>
</div>