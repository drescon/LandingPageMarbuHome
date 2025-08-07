// @ts-check
import { defineConfig, envField} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";



// https://astro.build/config
export default defineConfig({
  vite: {    plugins: [tailwindcss()],  },
  env:{
    schema:{
       GOOGLE_MAPS_API_KEY: envField.string({context:'server',access:'public'})
    }  
   
  }
});