<script>
    import Navbar from '../../../components/en/Navbar.svelte'
    import Footer from '../../../components/en/Footer.svelte';
    import Card from '../../../components/en/Card.svelte';

    export let description = 'Community activities';
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<header class="bg-mainPink flex flex-col items-center bg-[url('../src/assets/duck.svg')] bg-repeat h-2*screen">
    <Navbar/>  
    <Card/>
    <Footer/>

</header>