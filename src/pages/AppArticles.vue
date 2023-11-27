<script>
import articles from '../db/articles.json';

export default {
    data() {
        return {
            articlesList: articles,
        }
    },
    methods: {
        printRis() {
            console.log(this.articlesList);
        },
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <h1 class="text-center">Articoli</h1>
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
                            <router-link :to="{ name: 'single-article', params: { id: article.id} }" class="btn btn-outline-success rounded-pill">
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
</style>