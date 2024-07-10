import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

//zdding middleware


/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter()
    },
    preprocess: vitePreprocess()
};
export default config;