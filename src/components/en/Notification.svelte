<script>
    import { fade } from 'svelte/transition';
  
    export let message = '';
  
    const notificationStyles = {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '8px',
      transition: 'opacity 0.3s ease',
    };
  </script>
  
  <div class="fixed bottom-4 right-4 font-ubuntu text-lg bg-mainBrown text-mainBeige p-4 rounded-md transition-opacity" style="{notificationStyles}" transition:fade>
    {message}
  </div>
  
  <style>
    div {
      opacity: 1;
    }
  </style>
  