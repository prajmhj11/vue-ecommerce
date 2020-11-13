<template>
    <div class="products">
        <div class="container">
            <div class="row intro align-items-center">
                <div class="col-md-6 left-intro">
                    <h3>Products Page</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                    </p>
                </div>
                <div class="col-md-6 right-intro">
                    <img src="../../assets/products.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Products"
}
</script>

<style lang="scss" scoped>
    .products{
        .right-intro{
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>