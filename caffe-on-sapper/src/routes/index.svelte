<script>
    import Layout from '../components/Layout.svelte';
	import { goto } from '@sapper/app';

    function goOrder() {
        // do gtag
		goto( '/order' );
    }
</script>

<svelte:head>
	<title>Caffe</title>
</svelte:head>

<Layout>
    <h1 class="text-4xl font-bold my-8">Caffe</h1>

    <p class="mb-2">웹사이트에서 바로 커피를 주문할 수 있는 서비스입니다.</p>

    <p class="mb-4">지금 바로 주문 해보세요</p>

    <button class="btn btn-outline-primary" on:click={ goOrder }>
        바로 주문해보기
    </button>
</Layout>
