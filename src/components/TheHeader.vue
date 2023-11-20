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
                    link: 'Articoli',
                    link_name: 'articles',
                },
                {
                    link: 'Contatti',
                    link_name: 'contacts'
                }
            ],
            socials: [
                {
                    icon: '',
                    link: ''
                }
            ]
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
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