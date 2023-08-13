<template>
  <div class="base">
    <div class="container">
        <v-app-bar-title class="topbar">Bienvenid@ {{getUser.name}}</v-app-bar-title>
        
        <div v-for="(item, index) in getUser.units" :key="item._id" >
            <Buttom :unit="item" :index="index"/>
        </div>

    </div>

  </div>
</template>

<script>
import Buttom from './Buttom.vue'
export default {
  components: { Buttom },

  computed: {
        getUser() {
            const user = JSON.parse(localStorage.getItem('storedUser'));
            console.log(user)
            return user
        }
    },
}

</script>

<style>
.base {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background-color:transparent;
}
.base ::after {
    content: '';
  display: block;   
}
.container {
    min-width: 23rem;
    min-height: 40rem;
    align-items: center;
    background-color: white;
    width: 80%;
    height: 80%;
    overflow-y: auto;
}
.topbar {
    color: white ;
    justify-items: right  !important;;
    justify-content: right !important;
    background-color: #f895b1 !important;
    height: 10%;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 1rem;
    display: block !important;
}

</style>