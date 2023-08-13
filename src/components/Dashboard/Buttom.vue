<template>
  <div :class="index%2==0?'btn-container':'btn-container-second'" >
    <v-btn variant="outlined"  class="btn-container__btn" @click="goQuestion" :disabled="unit.desblock> getUser.AcumPoints" > {{unit.name}}</v-btn>
    <div class="containerUnit">
    <h1 class="label-unitName">{{unit.name}}</h1>
    <p class="label-unitDescription " >{{unit.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        unit : {
            type: Object,
            required: true,
            default: () => ({})
        },
        index: {
            type: Number,
            required: true,
            default: 0
        }
    },
    methods: {
        goQuestion(){
            console.log(this.unit._id)
        localStorage.setItem('unitId',this.unit._id)
            this.$router.push({ name: 'Questions'}) 
            }
        },
     computed: {
        getUser() {
            const user = JSON.parse(localStorage.getItem('storedUser'));
            return user
        }
        }

    }


</script>

<style>
.btn-container 
{
    margin: 5%;
    display: flex;
    background-color: #fafafa;
}
.btn-container-second {
    border: none;  
    display: flex;
    flex-direction: row-reverse;
    margin: 5%;
    background-color: #ffe0ea;
    
    min-width: 20rem;
    

}
.btn-container__btn {
    align-self: right;
    height: 20rem !important;
    width: 20rem;
    min-width: 20rem;
    border-radius: 50%;
    background-color:#cffc96 ;
    border: none;
    text-align: justify;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem;
    color: #f895b1;

}

.containerUnit {

    justify-content: center !important;
    margin-top: 3rem;
    width: 100vh;

}
.label-unitName {
    width: 70%;
    min-width: 20rem;
    margin-bottom: 2rem;
    margin-top: 3rem;
    color: #f895b1;
}
.label-unitDescription {
    color: #464646;
}

</style>