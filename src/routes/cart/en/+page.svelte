<script>
    import Navbar from '../../../components/en/Navbar.svelte'
    import Footer from '../../../components/en/Footer.svelte';
    import ShopCart from '../../../components/en/ShopCart.svelte';

    export let description = 'Shopping cart';
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<header class="bg-mainPink flex flex-col items-center bg-[url('../src/assets/duck.svg')] bg-repeat h-2*screen">
    <Navbar/>  
    <header class="text-mainBrown  bg-mainBeige py-2 rounded-3xl border-mainBrown border-4 font-ubuntu text-center text-xl font-medium self-center w-[321px] mt-8">SHOPPING CART</header>
    <ShopCart/>
    <Footer/>

</header>