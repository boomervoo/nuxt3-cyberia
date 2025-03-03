// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/style.css'],
    modules: ['@pinia/nuxt'],
    runtimeConfig: {
        public: {
            apiBaseUrl: '',
        },
    },
});
