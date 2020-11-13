<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <sidebar></sidebar>
            <!-- page-content  -->
            <main class="page-content bg-light pt-2">
                <div class="container-fluid">
                    <a id="toggle-sidebar" href="#">
                        <span><i class="fas fa-bars text-dark"></i></span>
                    </a>
                </div>
                <div class="container">
                    <router-view></router-view>
                </div>
            </main>
            <!-- page-content" -->
        </div>
        <!-- page-wrapper -->`
    </div>
</template>

<script>
export default {
    name: 'admin',
}
</script>

<style lang="scss" scoped>
.page-content{
    min-height: 100vh !important;
}
</style>