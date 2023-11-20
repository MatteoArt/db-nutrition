import { createRouter, createWebHistory } from "vue-router";

//componenti che corrispondono alle varie pagine navigabili del sito
import AppHome from './pages/AppHome.vue'
import AppBiografia from './pages/AppBiografia.vue'
import AppArticles from './pages/AppArticles.vue'
import AppContacts from './pages/AppContacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/biography',
            name: 'biografia',
            component: AppBiografia
        },
        {
            path: '/articles',
            name: 'articles',
            component: AppArticles
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        }
    ]
});

export { router };