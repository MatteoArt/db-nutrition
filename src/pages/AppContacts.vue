<script>
export default {

}

</script>

<template>
    <h1 class="text-center mt-2">Donde reservar?</h1>
    <div class="container-md mt-5">
        <div class="row">
            <div class="col-sm-6">
                <h4 class="text-start">Nexesalut</h4>
                <img src="../assets/nexesalut.png" class="img-fluid h-100 object-fit-cover" alt="nexesalut"
                    title="Nexesalut">
                <p class="my-font-small">
                    Nexesalut, C/ Gran De Gràcia 56 1er 1ª, Barcellona, Catalogna, Spagna
                </p>
            </div>
            <div class="col-sm-6 my-margin-2">
                <h4 class="text-start">Osteo Wellness Studio</h4>
                <img src="../assets/osteowellness.png" class="img-fluid h-100 object-fit-cover" alt="osteowellness"
                    title="Osteo Wellness Studio">
                <p class="my-font-small">
                    Ronda de San Pedro 40, 08010, Barcelona (Cataluña)
                </p>
            </div>
        </div>
        <div class="d-block my-margin text-center">
            <i class="fa-brands fa-whatsapp wa-icon"></i>
            <div>
                <a href="https://wa.me/c/34685258938" class="fs-3" target="_blank">+34 685258938</a>
                <p>Reservar una visita y consultar precios</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.my-font-small {
    font-size: small;
}

.my-margin {
    margin: 100px auto 0;
}

.my-margin-2 {
    margin-top: 100px;
}

.wa-icon {
    font-size: 80px;
    color: #12BB18;
}

@media screen and (min-width: 576px) {

    .my-margin-2 {
        margin-top: 0;
    }
}
</style>