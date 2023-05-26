// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: './tailwind.config.js',
        exposeConfig: false,
        exposeLevel: 2,
        injectPosition: 'first',
        viewer: true,
    },
    app:{
        head:{
            title: 'Nuxt Dojo',
            meta:[
                {name:'description', content: 'Everything about Nuxt'}
            ],
            link:[
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }
})
 