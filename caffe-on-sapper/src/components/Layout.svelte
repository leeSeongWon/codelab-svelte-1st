<script>
    export let hideHeader = false;
    import Header from "./Header.svelte";
    import Footer from './Footer.svelte';
</script>

<main>
    {#if !hideHeader}
    <Header/>
    {/if}

    <div class="container px-4 flex-1">
        <slot />
    </div>

    <Footer />
</main>

<style>
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>