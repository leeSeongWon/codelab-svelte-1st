<script>
	export let name;

	import { db } from './firebaseApp';
	import { collection, onSnapshot } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let menu = [];

	const menuRef = collection( db, 'menu' );

	onMount(()=>{
		const unsubscribe = onSnapshot( menuRef, snapshot => {
			const newMenu = [];
			snapshot.forEach( doc => {
				newMenu.push({
					id: doc.id,
					...doc.data(),
				});
			});
			menu = newMenu;
		} );

		return () => {
			unsubscribe();
		}
	})

	$: order = {
		detail: menu.map( item => ({
			...item,
			count: 0,
		}))
	}
	$: filteredOrder = {
		...order,
		detail: order.detail.filter( item => item.count !== 0 )
	};
	$: sum = filteredOrder.detail.reduce( ( sum, item ) => sum + item.price * item.count, 0 );

	function addItem( name ) {
		const index = order.detail.findIndex( item => item.name === name );
		order.detail[ index ].count += 1;
		order = { ...order };
	}

	function removeItem( name ) {
		const index = order.detail.findIndex( item => item.name === name );
		if( order.detail[ index ].count > 0 ) {
			order.detail[ index ].count -= 1;
		}
		order = { ...order };
	}
</script>

<main>
	<h1>커피 주문</h1>
	<ul>
		{#each menu as item(item.id)}
		<li>
			{item.name} / {item.price}원

			<button on:click={() => removeItem( item.name )}>-</button>
			<button on:click={() => addItem( item.name )}>+</button>
		</li>
		{/each}
	</ul>

	<hr>
	<h2>주문서</h2>

	<ul>
		{#if filteredOrder.detail.length === 0}
			<li>주문서가 비어있습니다.</li>
		{/if}
		{#each filteredOrder.detail as item(item.name)}
			<li>
				{ item.name } &times; {item.count }잔 = { item.price * item.count }원
			</li>
		{/each}
	</ul>

	<p>총 금액: {sum}원</p>

	<button>주문하기</button>

</main>

<style>
</style>
