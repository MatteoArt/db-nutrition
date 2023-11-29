<script>
import articles from '../db/articles.json';

export default {
    data() {
        return {
            articlesList: articles,
            searchForm: '',
        }
    },
    methods: {
        printRis() {
            console.log(this.articlesList);
        },
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
        searchTxt() {
            const ricerca = this.searchForm;
            console.log(ricerca);

            //lista di tutti gli articoli dove effettuare la ricerca
            const article = this.articlesList;

            //array che conterrà tutte le stringhe nel json che soddisfano la ricerca
            let paroleTrovate = [];

            for (let i = 0; i < article.length; i++) {
                console.log(article[i].title)
                console.log(article[i].description)
            }
        }
    }
}

</script>

<template>
    <h1 class="text-center">Articoli</h1>
    <div>
        <div class="m-auto d-flex justify-content-center" style="width: 250px;">
            <input class="form-control border-end-0 rounded-end-0" 
            type="text" placeholder="cerca..." v-model="searchForm" @keyup.enter="searchTxt">
            <span class="my-button border border-start-0 d-flex align-items-center px-3 rounded-end-2"
            @click="searchTxt">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
        <!-- !!! provvisorio !! -->
        <span>Ricerca: {{ searchForm }}</span>
    </div>

    <div class="container mx-auto mt-4 mb-3">
        <div class="row row-gap-3">
            <div class="col-md-6" v-for="article in articlesList">
                <div class="card h-100">
                    <div class="my-img-container">
                        <img :src="getImagePath(article.img)" class="card-img-top" alt="img_info">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-semibold"> {{ article.title }} </h5>
                        <p class="card-text mt-3">
                            {{ article.description }}
                        </p>
                        <div class="mt-auto">
                            <router-link :to="{ name: 'single-article', params: { id: article.id } }"
                                class="btn btn-outline-success rounded-pill">
                                <i class="fa-solid fa-arrow-right" style="margin-right: 8px;"></i> Scopri di più
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.my-img-container {
    height: 272px;
    overflow: hidden;
}
input::placeholder {
    text-align: center;
    color: rgb(166, 166, 166);
}
.my-button {
    color: rgb(166, 166, 166);
    cursor: pointer;
}
</style>