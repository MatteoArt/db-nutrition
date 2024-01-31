<script>
import articles from '../db/articles.json';

export default {
    data() {
        return {
            articlesList: articles
        }
    },
    methods: {
        lastTwoArticles() {
            const lung = this.articlesList.length;

            let ris = [];
            for (let i = lung - 1; i > lung - 3; i--) {
                ris.push(this.articlesList[i])
            }
            return ris;
        },
        getImagePath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-sm-6 rounded-end-1" style="background-color:#EFE7F4;">
                <h2 class="mb-4">¡Bienvenido a mi pagina web!</h2>
                <div class="text-start">
                    <p>En nuestra comunidad, nos esforzamos por lograr un equilibrio saludable
                        entre peso, estética y tus compromisos diarios. Como dietista nutricionista, mi objetivo es
                        acompañarte en el camino hacia un estilo de vida más saludable y sostenible.</p>
                    <p>Aquí, diseñamos planes de dieta personalizados que se ajustan a tus preferencias y horarios
                        semanales. Creemos que una
                        alimentación saludable no solo se trata de alcanzar tus metas de peso, sino
                        también de disfrutar de alimentos deliciosos que te gusten y que se adapten a
                        tu estilo de vida.</p>
                    <p>Trabajaremos juntos para crear un enfoque nutricional que sea práctico, sostenible y adaptado
                        a tus necesidades individuales. Estoy aquí para brindarte el apoyo y la orientación
                        que necesitas en tu viaje hacia una mejor salud y bienestar.</p>
                    <span class="d-inline-block mt-1 mb-3 fw-semibold">¡Gracias por elegirnos para ser parte de tu camino
                        hacia un estilo de vida más saludable!</span>
                </div>
            </div>
            <div class="col-sm-6 rounded-start-2 my-back-img">

            </div>
        </div>
    </div>
    <div class="container mt-5 mb-2">
        <h2 class="text-center pb-2">Áreas de consultoría</h2>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                <div><i class="fa-regular fa-circle-down fa-xl text-success"></i></div>
                <h5 class="text-center mt-1 mb-2 text-success">Dieta personalizada</h5>
                <p class="fst-italic">
                    Personalizamos tu dieta para adaptarla a tu estilo de vida, preferencias y objetivos de salud, haciendo
                    que el camino hacia el bienestar sea una experiencia lo más natural posible.
                </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                <div><i class="fa-regular fa-circle-down fa-xl text-success"></i></div>
                <h5 class="text-center mt-1 mb-2 text-success">Antropometría para deportistas</h5>
                <p class="fst-italic">
                    Optimiza tu rendimiento deportivo controlando la nutrición, hidratación y suplementación específica,
                    crearemos programas nutricionales específicos para tu somatotipo, suportar la recuperacione y acercarte
                    a tu objetivo.
                </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                <div><i class="fa-regular fa-circle-down fa-xl text-success"></i></div>
                <h5 class="text-center mt-1 mb-2 text-success">Educación nutricional pediátrica</h5>
                <p class="fst-italic">
                    La educación nutricional para padres está diseñada para acompañarle durante el embarazo y el periodo de
                    destete. Trabajamos con usted para proporcionarle consejos específicos, fomentando hábitos alimentarios
                    positivos desde la temprana edad de su hijo.
                </p>
            </div>
        </div>
    </div>
    <div class="container w-75 mx-auto mt-4 mb-3">
        <h2 class="text-center pb-2">Ultimos articulos</h2>
        <div class="row row-gap-3">
            <div class="col-md-6" v-for="card in lastTwoArticles()">
                <div class="card h-100">
                    <div class="my-img-container">
                        <img :src="getImagePath(card.img)" class="card-img-top" alt="img_info">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-semibold"> {{ card.title }} </h5>
                        <p class="card-text mt-3">
                            {{ card.description }}
                        </p>
                        <div class="mt-auto">
                            <router-link :to="{ name: 'single-article', params: { id: card.id } }"
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
.my-back-img {
    background-image: url('../assets/background-home.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.my-img-container {
    height: 272px;
    overflow: hidden;
}

.my-justify-txt {
    text-align: justify;
}</style>