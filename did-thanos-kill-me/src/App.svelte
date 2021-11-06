<script>
	let value = Math.random();

	function showAnotherUniverse() {
		value = Math.random();
	}
</script>

<main>
	<p>
		{ value < 0.5 ? '당신은 우주의 균형을 위해 먼지가 되었습니다.' : '당신은 살아남았습니다.' }
	</p>

	<button on:click={ showAnotherUniverse }>다른 평행 우주 보기</button>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	p {
		font-size: 3rem;
		font-weight: bold;
	}
</style>