// SEED THE DB
import {
	product,
	productImage,
	productSize,
	productTag,
	productToProductTag
} from './src/lib/server/db/schema';

import 'dotenv/config';

import * as schema from './src/lib/server/db/schema';
import { createPool } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

// Load the connection string from environment variables
const pool = createPool({
	connectionString: process.env.POSTGRES_URL
});

export const db = drizzle(pool, { schema });

const seed = async () => {
	// create some products
	const products = [
		{
			name: 'Lamp I',
			desc: 'The first lamp in our Illuminate Collection, embodying the warmth and comfort of a well-lit home.',
			id: 'illuminate_lamp_i'
		},
		{
			name: 'Lamp II',
			desc: 'The second lamp in our Illuminate Collection, a testament to the elegance and sophistication of modern design.',
			id: 'illuminate_lamp_ii'
		}
	];

	const insertedProducts = (await db.insert(product).values(products)).rows;

	console.log(`INSERTED: ${insertedProducts.length} products`);

	// create some product sizes
	// TODO STRIPE:
	// replace the stripeProductId and stripePriceId which you get from the dashboard
	const productSizes = [
		{
			code: 'illuminate_lamp_i_small',
			height: 12,
			width: 6,
			price: 60,
			stripeProductId: 'prod_PjX8jCckED4YgP',
			stripePriceId: 'price_1Ou43wGq88MAyKwhJOek68Uq',
			productId: 'illuminate_lamp_i'
		},
		{
			code: 'illuminate_lamp_i_large',
			height: 18,
			width: 9,
			price: 80,
			stripeProductId: 'prod_PmUor0OBNDG70N',
			stripePriceId: 'price_1OwvorGq88MAyKwhrLhEQxjm',
			productId: 'illuminate_lamp_i'
		},
		{
			code: 'illuminate_lamp_ii_small',
			height: 12,
			width: 6,
			price: 60,
			stripeProductId: 'prod_PmUpuBHgXAl3jr',
			stripePriceId: 'price_1OwvpWGq88MAyKwhh6rc0er1',
			productId: 'illuminate_lamp_ii'
		},
		{
			code: 'illuminate_lamp_ii_large',
			height: 18,
			width: 9,
			price: 80,
			stripeProductId: 'prod_PmUpEF0t9X9KZ5',
			stripePriceId: 'price_1OwvpxGq88MAyKwhzyoiuJpw',
			productId: 'illuminate_lamp_ii'
		}
	];

	const insertedProductSizes = (await db.insert(productSize).values(productSizes)).rows;

	console.log(`INSERTED: ${insertedProductSizes.length} product sizes`);

	// create some product images
	// TODO CLOUDINARY: update the cloudinaryIds with your own cloudinary ids
	const images = [
		{
			cloudinaryId: 'drive_shirt_i_front',
			width: 1920,
			height: 1280,
			productId: 'illuminate_lamp_i'
		},
		{
			cloudinaryId: 'drive_shirt_i_back',
			width: 1920,
			height: 1280,
			productId: 'illuminate_lamp_i'
		},
		{
			cloudinaryId: 'drive_shirt_ii_front',
			width: 1920,
			height: 1280,
			productId: 'illuminate_lamp_ii'
		},
		{
			cloudinaryId: 'drive_shirt_ii_back',
			width: 1920,
			height: 1280,
			productId: 'illuminate_lamp_ii'
		}
	];

	const insertedImages = (await db.insert(productImage).values(images)).rows;

	console.log(`INSERTED: ${insertedImages.length} product images`);

	// create some product tags
	const productTags = [
		{
			name: 'Illuminate',
			desc: 'Shedding light on the art of 3D printing, this collection embodies the elegance and innovation of our unique lamps.'
		}
	];

	const insertedTags = (await db.insert(productTag).values(productTags)).rows;

	console.log(`INSERTED ${insertedTags.length} product tags`);

	// attach tags to products
	const productsToTags = [
		{
			productId: 'illuminate_lamp_i',
			tagId: 'Illuminate'
		},
		{
			productId: 'illuminate_lamp_ii',
			tagId: 'Illuminate'
		}
	];

	const insertedTagsToProducts = (await db.insert(productToProductTag).values(productsToTags)).rows;

	console.log(`INSERTED ${insertedTagsToProducts.length} product tag relations`);
};

seed();
