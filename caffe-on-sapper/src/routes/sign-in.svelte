<script>
    import Layout from '../components/Layout.svelte';
    import { goto } from '@sapper/app';
</script>

<Layout hideHeader={ true }>
    <section>
        <button
            class="btn btn-outline-primary"
            on:click={ () => goto( '/', { replaceState: true } )}
        >
            로그인
        </button>
    </section>
</Layout>

<style>
    section {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
