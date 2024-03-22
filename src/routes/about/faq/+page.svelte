<script>
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<div class="flex flex-col md:flex-row md:p-16 bg-white grow min-h-screen">
	<div class="md:w-1/3 md:flex flex-col gap-2 hidden">
		<h2 class="text-4xl font-jura">FAQ</h2>
		<h4>Answers to common questions.</h4>
	</div>

	<div class="grow px-4">
		<div class="w-full flex flex-col pt-4 px-2">
			<h3 class="text-center font-jura text-5xl pb-8">What is Sculpta Art?</h3>
			<p class="text-center text-lg font-light pb-4">
				We bring the beauty of art and technology together, creating unique 3D printed decor for your home or office.
			</p>

			<p class="text-center text-lg font-light pb-8">
				We craft each piece to order, ensuring a unique blend of design and personal touch, and deliver it right to your door.
			</p>
		</div>

		<Accordion.Root class="w-full">
			<Accordion.Item value="q-1">
				<Accordion.Trigger class="md:text-2xl font-jura text-xl"
					>What are you selling?</Accordion.Trigger>
				<Accordion.Content class=" font-light">We are an online store specializing in 3D printed decor. Our collection includes a variety of unique lamps, each designed and printed in-house. We handle every step of the process, from design to production, ensuring the highest quality for our pieces.</Accordion.Content
				>
			</Accordion.Item>
			<Accordion.Item value="q-2">
				<Accordion.Trigger class="md:text-2xl font-jura text-xl"
					>Where do your images come from?</Accordion.Trigger
				>
				<Accordion.Content
					>All of our images are our own. We take, process, light, and develop all of our images in
					house.</Accordion.Content
				>
			</Accordion.Item>
			<Accordion.Item value="q-5">
				<Accordion.Trigger class="md:text-2xl font-jura text-xl">
					How do you make your pieces?
				</Accordion.Trigger>
				<Accordion.Content>
					We use <a href="https://www.creality.com/" target="_blank" class="underline">Creality 3D printers</a> for our pieces. They create world-class 3D printers, perfect for crafting our unique pieces.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="q-6">
				<Accordion.Trigger class="md:text-2xl font-jura text-xl">
					Do you offer returns?</Accordion.Trigger
				>
				<Accordion.Content
					>Yes, contact our support email and we will make it right!</Accordion.Content
				>
			</Accordion.Item>
			<Accordion.Item value="q-7">
				<Accordion.Trigger class="md:text-2xl font-jura text-xl">
					Can I use the images on this site?</Accordion.Trigger
				>
				<Accordion.Content
					>No. All images and art pieces on Sculpta Art are copywritten.</Accordion.Content
				>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</div>
