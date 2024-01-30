<script>
  import { cart } from '../../cart.js';

let cartItems = [];


cart.subscribe(value => {
  cartItems = value;
});

function priceTotal() {
    let total = 0;
    for (const item of cartItems) {
      total += item.price_en; 
    }
    return total;
  }

</script>


<header class="bg-mainBeige border-mainBrown border-4 self-center flex w-full max-w-[960px] flex-col justify-center items-stretch mt-9 py-px rounded-3xl max-md:max-w-full">
      <div class="max-md:max-w-full">
        <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 py-20">
            {#if cartItems.length > 0}
              {#each cartItems as item (item.id)}
                <div class="justify-between items-stretch flex grow flex-col max-md:max-w-full max-md:mt-8">
                  <div class="py-6 max-md:max-w-full max-md:pl-5">
                    <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div class="flex flex-col items-stretch w-1/2 max-md:w-full max-md:ml-0">
                        <img alt={item.title_en} src={item.img} class="aspect-auto object-contain object-center w-full overflow-hidden max-md:mt-10 ml-6 rounded-2xl" />
                      </div>
                      <div class="flex flex-col items-stretch w-1/2 ml-6 max-md:w-full max-md:ml-0">
                        <div class="items-stretch flex flex-col max-md:mt-10">
                          <div class="text-mainBrown font-ubuntu text-l">{item.title_en}</div>
                          <div class="text-mainBrown font-ubuntu text-l whitespace-nowrap mt-10">{item.price_en} $</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/each}
            {:else}
              <p class="text-mainBrown text-xxl font-ubuntu font-medium text-center">Your cart is empty.</p>
            {/if}
          </div>
        {#if cartItems.length > 0}
      <div class="flex flex-col items-stretch w-1/2 ml-5 max-md:w-full max-md:ml-0">
        <div class="justify-between items-stretch flex grow flex-col px-1.5 py-8 max-md:max-w-full max-md:mt-8">
          <div class="justify-between flex gap-5 px-6 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div class="text-mainBrown text-xxl font-ubuntu font-medium">Total:</div>
            <div class="text-mainBrown text-xxl font-ubuntu font-medium">{priceTotal()} $</div>
          </div>
          <button><a href="/shop" class="text-mainBeige w-auto max-w-full py-4 px-6 mt-8 text-l font-bitter font-medium bg-lightBrown  hover:bg-mainBrown rounded-lg text-center">CONTINUE SHOPPING</a></button>
          <button><a href="#" class="text-mainBeige w-auto max-w-full py-4 px-6 mt-8 text-l font-bitter font-medium bg-mainBrown  hover:bg-lightBrown active:bg-darkBrown rounded-lg text-center">MAKE AN ORDER</a></button>
        </div>
      </div>
      {/if}
    </div>
  </div>
</header>