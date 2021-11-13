<script>
	import { token } from '../stores';
	import { goto } from '@sapper/app';

	let auth = null;

	token.subscribe( value => {
		auth = value;
	} );

	let logout = (event) => {
		event.preventDefault();

        token.set( null );
		localStorage.removeItem('vinyl-pub-token');
		goto( '/' );
    };

	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="flex flex-row justify-between">
	<a href="/">
		Vinyl Pub
	</a>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href="/">홈</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="/about">바이닐 펍 소개</a></li>
		<li><a aria-current="{segment === 'notice' ? 'page' : undefined}" href="/notice">공지사항</a></li>
		<li><a aria-current="{segment === 'market' ? 'page' : undefined}" href="/market">중고거래</a></li>
		{#if auth === null }
		<li><a aria-current="{segment === 'sign-in' ? 'page' : undefined}" href="/sign-in">로그인</a></li>
		{:else}
		<li><a href="" on:click={logout}>로그아웃</a></li>
		{/if}
	</ul>
</nav>
