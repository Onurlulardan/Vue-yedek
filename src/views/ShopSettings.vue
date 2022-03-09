<template>
    <section class="section-view">
         <div class="row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
             <my-shop/>
             <my-shop/>
             <my-shop/>
             <my-shop/>
             <my-shop/>
             <my-shop/>
             <my-shop/>
        </div>
    </section>
</template>

<script>
import Shop from '../components/Shop.vue';

export default {
   name: 'ShopSettings',
   components: {
         'my-shop': Shop
   }
}


</script>

