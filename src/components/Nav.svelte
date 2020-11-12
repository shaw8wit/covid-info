<script>
	let isOpen = false;
	export let segment;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<style>
	nav {
		border-bottom: solid grey 1px;
		height: 12vh;
	}
</style>

<nav class="navbar" role="navigation" aria-label="main-navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item px-5">
			<img src="covid-logo.jpeg" alt="Covid-Logo" />
		</a>
		<span
			class="navbar-burger px-5"
			aria-label="menu"
			aria-expanded="false"
			on:click={toggleNav}
			class:is-active={isOpen}>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</span>
	</div>

	<div class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<a
				href="/"
				class="navbar-item px-5"
				class:is-active={segment === undefined}>
				Home
			</a>
			<a
				href="/about"
				class="navbar-item px-5"
				class:is-active={segment === 'about'}>
				About
			</a>
		</div>
	</div>
</nav>
