<script>
import articles from '../db/articles.json';

export default {
    data() {
        return {
            singleArticle: {}
        }
    },
    methods: {
        getSingleArticle() {
            const articleSlug = this.$route.params.slug;

            //ciclo sull'array di articoli per trovare quello che corrisponde allo slug passato
            for (let i = 0; i < articles.length; i++) {
                let article = articles[i];

                if (article.slug == articleSlug) {
                    this.singleArticle = article;
                    break;
                }
            }
        },
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    },
    mounted() {
        this.getSingleArticle();
    }
}

</script>

<template>
    <div class="container-fluid ms-2 mt-4 pe-5">
        <div class="d-flex justify-content-end mb-3">
            <router-link :to="{ name: 'articles' }" class="btn btn-outline-warning rounded-pill d-flex align-items-center">
                <i class="fa-solid fa-arrow-left" style="margin-right: 8px;"></i> <span>Vuelve atras</span>
            </router-link>
        </div>
        <h2>{{ singleArticle.title }}</h2>
        <p>{{ singleArticle.description }}</p>
        <div class="my-width my-container-img">
            <img :src="getImagePath(singleArticle.img)" class="img-fluid" alt="cover-article">
        </div>
        <p v-for="point in singleArticle.article_points" class="mb-2" style="white-space: pre-line;">{{ point }}</p>
        <div class="mt-5">
            <h4>Conclusiones</h4>
            <p>{{ singleArticle.conclusione }}</p>
        </div>
        <div class="mt-3" style="white-space: pre-line;">
            {{ singleArticle.foot }}
        </div>
    </div>
</template>

<style scoped>

.my-width {
    width: 100%;
}
.my-container-img {
    margin-bottom: 45px;
}

.desc {
    margin-left: calc(10px + 0.5rem);
}

@media screen and (min-width: 768px) {
    .my-width {
        width: 75%;
    }
}
</style>