<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ml-auto">
            <div class="container">
                <router-link to="/" class="navbar-brand"><img src="img/logo.png" width="50%" alt="logo"></router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#slider">Cerita Sukses</a> -->
                            
                            <router-link to="/cerita-sukses" class="nav-link">Cerita Sukses</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#">Kontak Kami</a> -->
                            <router-link to="/kontak-kami" class="nav-link">Kontak Kami</router-link>
                        </li>
                    </ul>
                    <!-- <a href="#0" class="btn-1">Request  Demo</a> -->
                    <!-- <router-link to="/request-demo" class="btn-1">Cerita Sukses</router-link> -->
                </div>
            </div>
        </nav>
</template>

<script>



export default {
  name: "HeaderEventy",
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.photo-item {
  width: 80px;
  height: 80px;
}

.nav-link.router-link {
   background-color: indianred;
   cursor: pointer;
 }

</style>