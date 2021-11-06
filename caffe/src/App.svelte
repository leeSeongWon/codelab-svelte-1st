<script>
	import { Router, Route } from 'svelte-routing';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Order from './pages/Order.svelte';
	import SignIn from './pages/SignIn.svelte';
</script>

<Router>
	<Route path="/sign-in" component={ SignIn } />
	<Route path="/order" component={ Order } />
	<Route path="/about" component={ About } />
	<Route path="/" component={ Home } />
</Router>

<style>
	
</style>