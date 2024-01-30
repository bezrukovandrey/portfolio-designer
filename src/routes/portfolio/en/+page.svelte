<script>
    import Navbar from '../../../components/en/Navbar.svelte'
    import Footer from '../../../components/en/Footer.svelte';
    import Carousel1 from '../../../components/en/Carousel1.svelte';
    import Carousel2 from '../../../components/en/Carousel2.svelte';
    import Carousel3 from '../../../components/en/Carousel3.svelte';
    
    export let description = 'Examples of my work';
    
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