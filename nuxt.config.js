export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'PJ Manning',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Coffee | Surf | Work | Wine',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        '@nuxtjs/moment',
        '@nuxtjs/google-analytics',
        'nuxt-facebook-pixel-module',
        '@aceforth/nuxt-netlify',
        '@nuxtjs/sitemap',
        'vue-scrollto/nuxt',
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
            name: 'PJ Manning',
        },
        icon: {
            fileName: 'icon.png?v1',
        },
    },
    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID,
    },
    plausible: {
        domain: 'pjmanning.dev',
        // apiHost: 'https://pjmanning.dev/stats', // Reports events to https://<yourdomain.com>/stats/api/event
    },
    facebook: {
        /* module options */
        track: 'PageView',
        pixelId: process.env.FACEBOOK_PIXEL,
        disabled: false,
    },
    sitemap: {
        hostname: process.env.BASE_URL || 'https://pjmanning.dev',
        routes: async () => {
            const { $content } = require('@nuxt/content')

            const posts = await $content('posts').only(['slug']).fetch()

            return posts.map(p => `${p.slug}`)
        },
    },
    netlify: {
        redirects: [
            {
                from: '/travel-insurance',
                to: '/digital-nomad-travel-insurance',
                status: 301,
            },
            {
                from: '/10-surf-jobs-that-will-let-you-travel-and-surf-your-entire-life',
                to: '/travel-and-surf-jobs',
                status: 301,
            },
            {
                from: '/digital-nomad-health-insurance',
                to: '/digital-nomad-insurance',
                status: 301,
            },
            {
                from: '/articles',
                to: '/digital-nomad-blog',
                status: 301,
            },
            {
                from: '/phil-manning',
                to: 'https://pjmanning.dev',
                status: 301,
            },
            {
                from: '/pj-manning',
                to: 'https://pjmanning.dev',
                status: 301,
            },
            {
                from: '/phil-manning-digital-nomad',
                to: '/pj-manning-digital-nomad',
                status: 301,
            },
        ],
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
