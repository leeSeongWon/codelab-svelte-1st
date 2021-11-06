<script>
    import Layout from '../components/Layout.svelte';

    const formatter = Intl.NumberFormat( 'ko-KR' );

    const menu = [
        { name: '에스프레소', price: 2800 },
        { name: '아메리카노', price: 3000 },
        { name: '카페라떼', price: 3400 },
        { name: '바닐라라떼', price: 3700 },
    ];

    let selected = [];

    function toggleItem( name ) {
        if( selected.find( element => element.name === name ) ) {
            selected = selected.filter( element => element.name !== name );
        }
        else {
            const item = menu.find( element => element.name === name );
            selected = [ ...selected, item ];
        }
    }

    let sum = 0;
    $: {
        sum = 0;
        selected.forEach( item => sum += item.price );
    }
</script>

<Layout>
    <h1 class="text-4xl font-bold my-8">주문하기</h1>

    <dl>
        {#each menu as item}
            <dt>{ item.name }</dt>
            <dd>
                { formatter.format( item.price ) }원
                {#if selected.find( element => element.name === item.name )}
                    <button
                        class="btn btn-sm btn-outline-danger"
                        on:click={ () => toggleItem( item.name ) }
                    >
                        선택됨
                    </button>
                {:else}
                    <button
                        class="btn btn-sm btn-outline-primary"
                        on:click={ () => toggleItem( item.name ) }
                    >
                        선택
                    </button>
                {/if}
                
            </dd>
        {/each}
    </dl>

    <hr class="my-4">

    <h2 class="text-2xl font-bold mb-2">주문서</h2>

    <ul class="mb-2">
        {#each selected as item }
            <li>- { item.name }</li>
        {/each}
    </ul>

    <p class="mb-4">합계 : {formatter.format( sum )}원</p>

    <button class="btn btn-lg btn-primary" on:click={ () => alert( '주문이 전송되었습니다.')}>
        주문하기
    </button>
</Layout>
