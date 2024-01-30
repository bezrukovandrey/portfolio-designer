<script>
    import Navbar from '../../components/ru/Navbar.svelte'
    import Footer from '../../components/ru/Footer.svelte';
    import Carousel1 from '../../components/ru/Carousel1.svelte';
    import Carousel2 from '../../components/ru/Carousel2.svelte';
    import Carousel3 from '../../components/ru/Carousel3.svelte';

    export let description = 'Примеры моих работ';
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<header class="bg-mainPink flex flex-col items-center bg-[url('../src/assets/duck.svg')] bg-repeat h-2*screen">
    <Navbar/>  
    <Carousel1/>
    <Carousel2/>
    <Carousel3/>
    <Footer/>

</header>