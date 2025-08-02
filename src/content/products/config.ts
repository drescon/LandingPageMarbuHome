import { defineCollection ,z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    }),
});

export const collections = {products};