<script>
export default {
    data() {
        return {
            navLinks: [
                {
                    link: 'Home',
                    link_name: 'home'
                },
                {
                    link: 'Biografia',
                    link_name: 'biografia'
                },
                {
                    link: 'Articulos',
                    link_name: 'articles',
                },
                {
                    link: 'Contactos',
                    link_name: 'contacts'
                }
            ],
            socials: [
                {
                    icon: "logo-sito.png",
                    link: "home"
                },
                {
                    icon: "instagram.svg",
                    link: "https://www.instagram.com/davide_nutricion/"
                },
                {
                    icon: "whatsapp.svg",
                    link: "https://wa.me/c/34685258938"
                },
                {
                    icon: "linkedin-in.svg",
                    link: "https://www.linkedin.com/in/davidebichelli/"
                }
            ]
        }
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <span v-for="social in socials">
                <router-link v-if="social.icon=='logo-sito.png'" class="navbar-brand" :to="{ name: social.link }">
                    <img :src="getImagePath(social.icon)" alt="logo" style="width: 130px;">
                </router-link>
                <a v-else :href="social.link" class="navbar-brand" target="_blank">
                    <img :src="getImagePath(social.icon)" alt="social-icon" style="width: 20px;">
                </a>
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="link in navLinks">
                        <router-link :to="{ name: link.link_name }" class="nav-link"
                        :class="$route.name == link.link_name ? 'active' : ''">
                            {{ link.link }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>