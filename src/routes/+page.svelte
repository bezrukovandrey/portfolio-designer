<script>
    import Navbar from '../components/ru/Navbar.svelte'
    import Greeting from '../components/ru/Greeting.svelte'
    import Footer from '../components/ru/Footer.svelte';

    export let description = 'Главная страница с приветствием и аватаром';
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<header class="bg-mainPink flex flex-col items-center bg-[url('../src/assets/duck.svg')] bg-repeat h-2*screen">
    <Navbar/>  
    <Greeting/>
    <Footer/>
</header>
  