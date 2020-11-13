<template>
    <div class="overview">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 left-overview">
                    <h3>Overview Page</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                    </p>
                </div>
                <div class="col-md-6 right-overview">
                    <img src="../../assets/overview.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Overview"
}
</script>

<style lang="scss" scoped>
.overview{
    .right-overview{
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>