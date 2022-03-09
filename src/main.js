import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// JAVASCRIPT
import "../src/assets/js/layout.js";


import "../src/assets/libs/bootstrap/js/bootstrap.bundle.min.js";
import "../src/assets/libs/simplebar/simplebar.min.js";
import "../src/assets/libs/node-waves/waves.min.js";
import "../src/assets/libs/feather-icons/feather.min.js";
import "../src/assets/js/pages/plugins/lord-icon-2.1.0.js";
import "../src/assets/js/plugins.js";

// // apexcharts
// import "../src/assets/libs/apexcharts/apexcharts.min.js";

// // Vector map
// import "../src/assets/libs/jsvectormap/js/jsvectormap.min.js";
// import "../src/assets/libs/jsvectormap/maps/world-merc.js";

// //Swiper slider js
// import "../src/assets/libs/swiper/swiper-bundle.min.js";

// //Dashboard init 
// import "../src/assets/js/pages/dashboard-ecommerce.init.js";

// // App Js
// import "../src/assets/js/app.js";




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
