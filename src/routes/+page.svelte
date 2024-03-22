<script lang="ts">
	import MobileLogo from '$lib/client/images/mobile_logo.png';
	import ImageCollection from '$lib/components/ImageCollection.svelte';

	import { CldImage } from 'svelte-cloudinary';

	export let data;

	const { homeTitle, homeSubtitle, desktopHomeImage, mobileHomeImage } = data.asset;
</script>

<main class="grow">
	<div class=" w-full relative">
		<div
			class="z-10 absolute top-[40%] left-0 w-full flex justify-center items-center flex-col gap-y-2"
		>
			<div class="text-white flex justify-center items-center flex-col gap-y-2">
				<div style="backdrop-filter: blur(5px); border-radius: 10px; padding: 12px;">
					<div class="flex flex-row gap-4 items-center">
						<img src={MobileLogo} alt="TPG" class="h-[40px] sm:hidden flex" />

						<h2 class="sm:text-5xl text-3xl font-jura">{homeTitle}</h2>
					</div>
					<h4 class="font-light sm:text-3xl text-xl font-jura">{homeSubtitle}</h4>
				</div>
				<a
					class="uppercase bg-black mt-14 px-7 py-3 font-light"
					href="/products?tag=Illuminate"
				>
					shop now</a
				>
			</div>
		</div>
		<div
			class="object-cover w-full h-[80vh] hidden sm:flex transition-all ease-in-out duration-300 bg-black"
		>
			<CldImage
				src={desktopHomeImage}
				width={1920}
				height={900}
				objectFit="cover"
				alt="home banner"
				opacity={90}
			/>
		</div>
		<div
			class={`object-cover w-full h-[80vh] sm:hidden flex transition-all ease-in-out duration-300 bg-black`}
		>
			<CldImage
				src={mobileHomeImage}
				width={700}
				height={1000}
				objectFit="cover"
				alt="home banner"
				opacity={80}
			/>
		</div>
	</div>
	<div class="w-full flex flex-col py-4 px-2 bg-black text-white">
		<h3 class="text-center font-jura text-5xl pb-8 px-3">Who we are</h3>
		<p class="text-center text-lg font-light pb-4 px-3">
			We're the pioneers of 3D printed decor, illuminating your space with our lamps, sprucing up your greenery with our pots, and adding a touch of elegance with our vases.
		</p>

		<p class="text-center text-lg font-light pb-8">
			Each piece is crafted to order, bringing a unique blend of sustainability and style right to your doorstep.
		</p>
	</div>
	<div class="w-full md:w-3/4 m-auto">
		<h2 class="font-jura sm:text-4xl text-3xl text-center pt-8 pb-4">Sustainability, Our Guiding Light</h2>
		<p class="text-lg text-center px-4 md:px-16 font-light">
			Our brand is rooted in respect for our environment. We're turning the tables on traditional manufacturing, using 3D printing to create products that are as eco-friendly as they are elegant.
		</p>
		<h2 class="font-jura sm:text-4xl text-3xl text-center pt-8 pb-4">Our Process, A Blueprint for Innovation</h2>
		<p class="text-lg text-center px-4 md:px-16 font-light pb-8">
			Each order sets our creative gears in motion. We 3D print your piece, ensuring a perfect fit and unique style, then carefully package it and send it on its journey to you.
		</p>
	</div>
	{#each data.collections as collection}
		<ImageCollection collectionData={collection} />
	{/each}
</main>
