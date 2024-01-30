<script>
    import Navbar from '../../components/ru/Navbar.svelte'
    import Footer from '../../components/ru/Footer.svelte';
    import Card from '../../components/ru/Card.svelte';

    export let description = 'Наше сообщество и чем мы занимаемся';
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<header class="bg-mainPink flex flex-col items-center bg-[url('../src/assets/duck.svg')] bg-repeat h-2*screen">
    <Navbar/>  
    <Card/>
    <Footer/>

</header>