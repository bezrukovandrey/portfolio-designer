<script>
  import { onMount} from 'svelte';
  import productsData from '../../../src/db.json'; 
  import Modal from './Modal.svelte';
  import Notification from './Notification.svelte';
  import { cart } from '../../cart.js';

  let currentIndex = 0;
  let products = [];
  let selectedCategory = '';
  let isModalOpen = false;
  let currentDescription = '';
  let notificationMessage = '';

  async function fetchData() {
    try {
      products = productsData.products || [];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  onMount(() => {
    fetchData();
  });

  function openModal(description) {
  currentDescription = description;
  isModalOpen = true;
}

  function closeModal() {
    isModalOpen = false;
  }

  function filterProducts(category) {
    selectedCategory = category;
  }


  
  function addToCart() {
    const selectedProduct = products[currentIndex]; 
      if (selectedProduct) {
        cart.update(existingCart => [...existingCart, selectedProduct]);
        notificationMessage = `The item has been added to your cart!`; 
        setTimeout(() => {
          notificationMessage = ''; 
        }, 3000); 
      }
    } 
</script>


<header class="justify-between items-stretch content-center flex-wrap bg-mainBeige border-mainBrown border-y-2 self-stretch flex w-full gap-5 mt-8 px-12 py-5 max-md:max-w-full max-md:px-5">
  <button on:click={() => filterProducts('Toys')}><a href="#" class="text-mainBrown active:bg-mainBrown active:text-mainBeige hover:bg-mainPink text-center text-m font-ubuntu px-4 py-2 rounded-2xl">TOYS</a></button>
  <button on:click={() => filterProducts('Jewelry')}><a href="#" class="text-mainBrown active:bg-mainBrown active:text-mainBeige hover:bg-mainPink text-center text-m font-ubuntu px-4 py-2 rounded-2xl">JEWELRY</a></button>
  <button on:click={() => filterProducts('Accessories')}><a href="#" class="text-mainBrown active:bg-mainBrown active:text-mainBeige hover:bg-mainPink text-center text-m font-ubuntu px-4 py-2 rounded-2xl">ACCESSORIES</a></button>
  <button on:click={() => filterProducts('Linocut')}><a href="#" class="text-mainBrown active:bg-mainBrown active:text-mainBeige hover:bg-mainPink text-center text-m font-ubuntu px-4 py-2 rounded-2xl">LINOCUT</a></button>
  <button on:click={() => filterProducts('Postcards')}><a href="#" class="text-mainBrown active:bg-mainBrown active:text-mainBeige hover:bg-mainPink text-center text-m font-ubuntu px-4 py-2 rounded-2xl">POSTCARDS</a></button>
  <button on:click={() => filterProducts('Stickers')}><a href="#" class="text-mainBrown active:bg-mainBrown active:text-mainBeige hover:bg-mainPink text-center text-m font-ubuntu px-4 py-2 rounded-2xl">STICKERS</a></button>
  <button on:click={() => filterProducts('Custom')}><a href="#" class="text-mainBrown active:bg-mainBrown active:text-mainBeige hover:bg-mainPink text-center text-m font-ubuntu px-4 py-2 rounded-2xl">CUSTOM</a></button>
</header>
<header class="flex w-full max-w-[960px] flex-col items-stretch mt-14 px-5 max-md:max-w-full max-md:mt-10">
  <div class="bg-mainBeige border-mainBrown border-4 flex flex-col justify-center items-stretch rounded-[64px] max-md:max-w-full">
    <div class="bg-mainBeige pl-12 rounded-[64px] max-md:max-w-full max-md:pl-5">
      <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div class="flex flex-col items-stretch w-1/2 max-md:w-full max-md:ml-0">
          <div class="flex my-8 flex-col items-stretch max-md:mt-10">
            <div class="flex-col  overflow-hidden relative flex aspect-square w-full justify-center items-stretch">
              <img alt="Product" src={products[currentIndex]?.img} class="absolute rounded-3xl h-full w-full object-cover object-center inset-0" />
            </div>
            <div class='flex justify-center max-md:justify-center mt-6'>
              {#each products.filter(product => !selectedCategory || product.category === selectedCategory) as product}
                <div class='mx-1 bg-lightGreen aspect-square justify-center items-center w-2 h-2 rounded-[60px] cursor-pointer'
                  on:click={() => currentIndex = product.id - 1}>
                  <div class='bg-lightGreen h-2 rounded-[64px]'></div>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch w-1/2 ml-5 max-md:w-full max-md:ml-0">
          <div class="justify-between items-center flex grow flex-col py-6 max-md:max-w-full max-md:mt-10">
            <div class="text-mainBrown text-center text-xl font-ubuntu self-center max-w-[320px]"> {products[currentIndex]?.title_en}</div>
            <div class="text-mainBrown text-center text-xl font-ubuntu font-medium self-stretch mt-8 max-md:max-w-full"> {products[currentIndex]?.price_en} $</div>
            <button on:click={() => openModal(products[currentIndex]?.description_en)} class="text-mainBeige w-auto max-w-full py-2 px-6 mt-8 text-l font-bitter font-medium bg-mainBrown hover:bg-lightBrown active:bg-darkBrown rounded-lg text-center">
              DESCRIPTION
            </button>
            <button class="flex-col overflow-hidden self-center relative flex aspect-square w-12 max-w-full justify-center items-center mt-8">
              <img alt="Heart icon" src="../src/assets/heart.svg" class="absolute h-full w-full object-cover object-center inset-0" />
            </button>
            <button on:click={() => { addToCart(); }} class="text-mainBeige w-auto max-w-full py-2 px-6 mt-8 text-l font-bitter font-medium bg-mainBrown hover:bg-lightBrown active:bg-darkBrown rounded-lg text-center">
              ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-mainBrown p-10 rounded-3xl bg-mainBeige border-mainBrown border-4 text-xl font-ubuntu mt-24 max-md:max-w-full max-md:mt-10"> Delivery rules: St. Petersburg - pickup is free. <br>
    Other cities - delivery by Russian post or other services (by agreement)
    <br>
    Information on orders can be clarified by mail duckcrossingcounty@gmail.com </div>
</header>
<Modal visible={isModalOpen} description={currentDescription} />
<Notification message={notificationMessage} />
