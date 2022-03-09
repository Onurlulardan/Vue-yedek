<template>
  <div id="app">
    <div class="app-cover">
        <my-navbar/>
        <my-appmenu/>
    </div>
    <router-view/>
  </div>
</template>


<script>
import AppMenu from './components/AppMenu.vue';
import NavBar from './components/NavBar.vue';
export default {
    components: {
        'my-appmenu': AppMenu,
        'my-navbar': NavBar,
    }
}
</script>


<style>
 @import "./assets/libs/jsvectormap/css/jsvectormap.min.css";
 @import "./assets/libs/swiper/swiper-bundle.min.css";
 @import "./assets/Css/app.min.css";
 @import "./assets/Css/bootstrap.min.css";
 @import "./assets/Css/custom.min.css";
 @import "./assets/Css/icons.min.css";
 @import "./assets/Css/main.css";
 
 


</style>
