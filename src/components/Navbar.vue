<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Ecommerce</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="width: 20px;"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
            <router-link to="/todo" class="nav-link" href="#">Todo</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">About</router-link>
        </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="form-control btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#loginModal" type="button">Get Start</button>
        </form>
    </div>
    </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
