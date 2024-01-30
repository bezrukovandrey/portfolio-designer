<script>
    export let description;
    export let visible;
  
    let localVisible = visible;
  
    $: localVisible = visible;
  
    function closeModal() {
      localVisible = false;
    }
  </script>
  
  {#if localVisible}
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-mainBeige rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-mainBeige px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-xl font-ubuntu font-medium leading-6 text-mainBrown">Описание</h3>
              <div class="my-10">
                <p class="text-lg font-ubuntu text-mainBrown">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-mainBeige px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-mainBrown text-xl font-bitter font-medium text-mainBeige hover:bg-lightBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-darkBrown sm:ml-3 sm:w-auto sm:text-sm" on:click={closeModal}>
            ЗАКРЫТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
  

  