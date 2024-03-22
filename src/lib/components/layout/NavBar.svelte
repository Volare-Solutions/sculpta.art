<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Logo from '$lib/client/images/tps.png';
	import MobileLogo from '$lib/client/images/tps.png';
	import { cartLengthStore } from '$lib/client/cart';
	import * as Menubar from "$lib/components/ui/menubar";
	export let user: {
		firstName: string;
		lastName: string;
		email: string;
		isAdmin: boolean;
	} | null;

	const handleMobileMenu = () => {
		const menu = document.getElementById('mobile-nav');
		menu?.classList.remove('opacity-0');
		menu?.classList.remove('pointer-events-none');
		menu?.classList.add('opacity-100');
	};
</script>

<nav
	class={`sm:flex sm:flex-row items-center justify-between grid grid-cols-3 sm:px-12 p-4 sm:py-1 w-full text-black z-20 sticky top-0 bg-white`}
>
	<button class="sm:hidden flex" on:click={() => handleMobileMenu()}>
		<svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1H21" stroke="#444444" stroke-width="1" stroke-linecap="round" />
			<path d="M1 10H21" stroke="#444444" stroke-width="1" stroke-linecap="round" />
		</svg>
	</button>

	<a class="text-4xl font-light mx-auto sm:mx-0" href="/">
		<img src={Logo} alt="TPG" class=" h-[70px] hidden sm:flex" />
		<img src={MobileLogo} alt="TPG" class="h-[50px] sm:hidden flex" />
	</a>

	<div class="flex-row items-center hidden sm:flex gap-6">
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>
					<button class="text-black uppercase font-jura flex flex-row items-center"> Collections </button>
				</Menubar.Trigger>
				<Menubar.Content>
					<a href="/products">
						<Menubar.Item>
							All Products
						</Menubar.Item>
					</a>
				<Menubar.Separator />
				<a href="/products?tag=Illuminate">
					<Menubar.Item>
						Illuminate Collection
					</Menubar.Item>
				</a>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar.Root>
		<a href="/about/faq" class="text-black uppercase font-jura flex flex-row items-center"> FAQ </a>
		{#if user}
			<a href="/profile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-round"
					><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg
				>
			</a>
		{:else}
			<a href="/auth/login">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-round"
					><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg
				>
			</a>
		{/if}
		<a href="/cart" class="relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-shopping-bag"
				><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path
					d="M16 10a4 4 0 0 1-8 0"
				/></svg
			>

			<div
				class="bg-black text-white font-light text-xs rounded-full absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center"
			>
				{$cartLengthStore}
			</div>
		</a>
		{#if user?.isAdmin}
			<Button variant="link" href="/admin/assets">admin</Button>
		{/if}
	</div>
	<div class="sm:hidden flex flex-row justify-end gap-3">
		{#if user}
			<a href="/profile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#444444"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-round"
					><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg
				>
			</a>
		{:else}
			<a href="/auth/login">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#444444"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-round"
					><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg
				>
			</a>
		{/if}
		<a href="/cart" class="relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#444444"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-shopping-bag"
				><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path
					d="M16 10a4 4 0 0 1-8 0"
				/></svg
			>
			<div
				class="bg-black text-white font-light text-xs rounded-full absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center"
			>
				{$cartLengthStore}
			</div>
		</a>
		{#if user?.isAdmin}
			<a href="/admin/products">admin</a>
		{/if}
	</div>
</nav>

<style>
	.no-scroll::-webkit-scrollbar-track {
		background: transparent;
	}
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scroll::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scroll {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
