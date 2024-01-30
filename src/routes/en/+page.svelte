<script>
    import Navbar from '../../components/en/Navbar.svelte'
    import Greeting from '../../components/en/Greeting.svelte'
    import Footer from '../../components/en/Footer.svelte';

    export let description = 'Contains greeting and avatar';
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>


<header class="bg-mainPink flex flex-col items-center bg-[url('../src/assets/duck.svg')] bg-repeat h-2*screen">
    <Navbar/>  
    <Greeting/>
    <Footer/>
</header>