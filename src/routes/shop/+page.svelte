<script>
    import Navbar from '../../components/ru/Navbar.svelte'
    import Footer from '../../components/ru/Footer.svelte';
    import Slider from '../../components/ru/Slider.svelte';

    export let description = 'Онлайн магазин';
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<header class="bg-mainPink flex flex-col items-center bg-[url('../src/assets/duck.svg')] bg-repeat h-2*screen">
    <Navbar/>  
    <header class="justify-center font-ubuntu text-mainBrown bg-mainBeige py-2 px-8 rounded-3xl border-mainBrown border-4 text-center text-xl max-w-[1024px] mt-8">ВЫБЕРИТЕ КАТЕГОРИЮ</header>
    <Slider/>
    <Footer/>

</header>