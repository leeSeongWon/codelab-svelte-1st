<script>
	import {currency} from "./utils/format";

	export let name;

	import { db } from './firebaseApp';
	import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let menu = [];

	const menuRef = collection( db, 'menu' );
	let orderId = null;
	let currentOrder = null;

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

	function submit() {
		if( sum === 0 ) {
			alert( '상품을 담아주세요' );
			return;
		}
		const ordersRef = collection( db, 'orders' );
		addDoc( ordersRef, {
			...filteredOrder,
            sum,
			status: '주문완료',
            date: new Date(),
		} )
		.then( doc => {
			orderId = doc.id;
		} )
		.catch(console.warn);
	}

	$: {
		if( orderId ) {
			const orderRef = doc( db, `orders/${orderId}` );
			onSnapshot(orderRef, snapshot => {
				currentOrder = snapshot.data();
			});
		}
	}

	$: {
		if( currentOrder && currentOrder.status === '픽업완료' ) {
			orderId = null;
			currentOrder = null;
			order = {
				detail: menu.map( item => ({
					...item,
					count: 0,
				}))
			}
		}
	}

</script>

<main>
	<h1>커피 주문</h1>
	<ul>
		{#each menu as item(item.id)}
		<li>
			{item.name} / {currency(item.price)}원

			{#if !currentOrder}
				<button on:click={() => removeItem( item.name )}>-</button>
				<button on:click={() => addItem( item.name )}>+</button>
			{/if}
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
				{ item.name } &times; {item.count }잔 = { currency(item.price * item.count) }원
			</li>
		{/each}
	</ul>

	<p>총 금액: {currency(sum)}원</p>

	{#if currentOrder }
		<div>상태 : {currentOrder.status}</div>
	{:else}
		<button on:click={submit}>주문하기</button>
	{/if}
</main>

<style>
</style>
