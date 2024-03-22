ALTER TABLE "product_size" ADD COLUMN "width" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "product_size" ADD COLUMN "height" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "product_size" DROP COLUMN IF EXISTS "size";