<script lang="ts" context="module">
	import { z } from 'zod';
	export const profileFormSchema = z.object({
		firstName: z
			.string()
			.min(2, 'First name must be at least 2 characters.')
			.max(30, 'Username must not be longer than 30 characters'),
		lastName: z
			.string()
			.min(2, 'Last name must be at least 2 characters.')
			.max(30, 'Username must not be longer than 30 characters'),
		email: z.string().email("Invalid email address"),
	});
	export type ProfileFormSchema = typeof profileFormSchema;
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { browser } from '$app/environment';

	export let data: SuperValidated<Infer<ProfileFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(profileFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="space-y-8" use:enhance id="profile-form">
	<Form.Field {form} name="firstName">
		<Form.Control let:attrs>
			<Form.Label>First Name</Form.Label>
			<Input placeholder="Tiger" {...attrs} bind:value={$formData.firstName} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="lastName">
		<Form.Control let:attrs>
			<Form.Label>Last Name</Form.Label>
			<Input placeholder="Woods" {...attrs} bind:value={$formData.lastName} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>


	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input placeholder="tiger@woods.com" {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Update profile</Form.Button>
</form>

{#if browser}
	<SuperDebug data={$formData} />
{/if}
