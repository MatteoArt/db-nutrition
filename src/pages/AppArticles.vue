<script>
import { ref } from 'vue';
import articles from '../db/articles.json';

export default {
    data() {
        return {
            articlesList: articles,
            searchForm: '',
            paroleTrovate: [] //array che conterrà tutte le stringhe nel json che soddisfano la ricerca
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
            //ad ogni nuova ricerca svuoto l'array contenente le stringhe trovate
            this.paroleTrovate = [];
            const ricerca = this.searchForm.trim().toLowerCase();
            if (ricerca === '') {
                return;
            }

            //lista di tutti gli articoli dove effettuare la ricerca
            const article = this.articlesList;


            for (let i = 0; i < article.length; i++) {
                if (article[i].title.toLowerCase().includes(ricerca)) {
                    this.paroleTrovate.push(article[i].title);
                }
                if (article[i].description.toLowerCase().includes(ricerca)) {
                    this.paroleTrovate.push(article[i].description);
                }
            }
            
            setTimeout(() => {
                for (const nameTag in this.$refs) {
                    console.log(`${nameTag}: ${this.$refs[nameTag]}`)

                    if (nameTag == 'finalDescription' || nameTag == 'finalTitle') {
                        console.log(this.$refs[nameTag])

                        //se l'elemento esiste nell'html
                        if (this.$refs[nameTag][0]) {
                            this.$refs[nameTag][0].scrollIntoView(
                                {
                                    behavior: 'smooth'
                                }
                            )
                        }
                    }
                }
            }, 500)
        }
    }
}

</script>

<template>
    <h1 class="text-center">Articulos</h1>
    <div>
        <div class="m-auto d-flex justify-content-center" style="width: 250px;">
            <input class="form-control border-end-0 rounded-end-0" 
            type="text" placeholder="buscar..." v-model="searchForm" @keyup.enter="searchTxt">
            <span class="my-button border border-start-0 d-flex align-items-center px-3 rounded-end-2"
            @click="searchTxt">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
    </div>

    <div class="container mx-auto mt-4 mb-3">
        <div class="row row-gap-3">
            <div class="col-md-6" v-for="(article , i) in articlesList">
                <div class="card h-100">
                    <div class="my-img-container">
                        <img :src="getImagePath(article.img)" class="card-img-top" alt="img_info">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 v-if="paroleTrovate.includes(article.title)" class="card-title fw-semibold"
                        :ref="paroleTrovate[paroleTrovate.length-1] == article.title ? 'finalTitle' : `title${i}`"> 
                            <span class="bg-warning-subtle"> <span style="z-index: 10;position: relative;">{{ article.title }}</span> </span> 
                        </h5>
                        <h5 v-else class="card-title fw-semibold">
                            {{ article.title }}
                        </h5>
                        <p v-if="paroleTrovate.includes(article.description)" class="card-text mt-3"
                        :ref="paroleTrovate[paroleTrovate.length-1] == article.description ? 'finalDescription' : `description${i}`">
                            <span class="bg-warning-subtle"> {{ article.description }} </span>
                        </p>
                        <p v-else class="card-text mt-3">
                            {{ article.description }}
                        </p>
                        <div class="mt-auto">
                            <router-link :to="{ name: 'single-article', params: { id: article.id } }"
                                class="btn btn-outline-success rounded-pill">
                                <i class="fa-solid fa-arrow-right" style="margin-right: 8px;"></i> Descubre mas
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