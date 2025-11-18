// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://avwedding-three.vercel.app',
  integrations: [
    react(), 
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        // Excluir DressCode permanentemente del sitemap
        // Gallery estará excluida hasta después del evento (2026-06-27)
        const excludePages = ['/DressCode/', '/DressCode']
        const now = new Date()
        const eventDate = new Date('2026-06-27')
        
        if (now < eventDate) {
          excludePages.push('/Gallery/', '/Gallery')
        }
        
        return !excludePages.some(excluded => page.includes(excluded))
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),

  publicDir: 'public', 
});