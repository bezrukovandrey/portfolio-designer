<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const message = writable(''); 
  const speed = 250; 

  const messages = ['ARTIST', 'DESIGNER', 'ILLUSTRATOR']; 
  let currentIndex = 0; 

  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      message.set(messages[currentIndex].substring(0, i));
      i++;

      if (i > messages[currentIndex].length) {
        i = 0;
        currentIndex = (currentIndex + 1) % messages.length;
      }
    }, speed);

    return () => clearInterval(interval);
  });
</script>


<div class="w-full max-w-[960px] mt-6 max-md:max-w-full">
    <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div class="flex flex-col items-stretch w-1/2 max-md:w-full max-md:ml-0">
        <img alt="Avatar" src="../src/assets/avatar.png" class="border-mainBrown border-2 aspect-square object-contain object-center w-full overflow-hidden rounded-[50%] max-md:max-w-full max-md:mt-10" />
      </div>
      <div class="flex flex-col items-stretch w-1/2 ml-5 max-md:w-full max-md:ml-0">
        <div class="flex p-10 rounded-3xl bg-mainBeige border-mainBrown border-4 grow flex-col items-stretch mt-2.5 px-5 max-md:mt-10">
          <div class="text-mainBrown text-xxl font-semibold font-ubuntu ">HEY! MY NAME IS SASHA. <br> I’M AN {$message}</div>
          <div class="text-mainBrown text-xl font-medium font-ubuntu mt-32 max-md:mt-10">Welcome to my wonderful store, where you can find examples of my work and order what you like with delivery.
            <br>In addition to my creativity, here you can become part of our small community and participate in creative events!</div>
        </div>
      </div>
    </div>
  </div>