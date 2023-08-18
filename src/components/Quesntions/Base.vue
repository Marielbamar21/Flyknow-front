<template>
  <div class="base">
    <v-snackbar v-model="showSnackbar" :timeout="4000">
    La respuesta no es correcta. Inténtalo de nuevo.
    </v-snackbar>
      <div class="container" >
        <v-app-bar-title class="topbar">Bienvenid@ {{getUser.name}}</v-app-bar-title>
        <div class="containerquestion"  >
          <v-card id="card" elevation="4" v-if="step < getQuestions.length" >{{getQuestion(step)}}</v-card>
        </div>
        <div class="container-cards">
          <div class="container-res"  v-for="(item, index) in getAnswer()" :key="index"  >
          <v-card id="respuestas" elevation="4" @click="isCorrect = item.correct" >{{item.description}}</v-card>
          </div>
        </div>
        <div>
          <v-btn variant="outlined"  class="btn-question" @click="incrementS" v-if="step < getQuestions.length">Suguiente</v-btn>
          <v-btn variant="outlined"  class="btn-question" @click="finish" v-else>Continuar</v-btn>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 
  components: { 
  
  },
  data(){
    return{
      step: 0,
      showSnackbar: false ,
      isCorrect : false,

    }
  },
    computed: {
        getUser() {
            const user = JSON.parse(localStorage.getItem('storedUser'));
            return user
        },
        getUnitId() { 
          return localStorage.getItem('unitId')
          
        },
        
      getQuestions(){
        const quest = this.getUser.questions
        let questionsUnit= quest.filter((item)=> item.unit === this.getUnitId)//
        return questionsUnit
          
          
          }
        
    },
    methods:{
      getAnswer(){
        let answers = this.getQuestions.map((item) =>  item.answers)
        let answer = answers[this.step]
        return answer
      },
      getQuestion(index){
        console.log(this.getQuestions)
        let quest = this.getQuestions.map((item) =>  item.question)
        console.log(quest)
        let question = quest[index]
        return question
      },
      incrementS() {

        if(!this.isCorrect)
        {
            this.showSnackbar = true;
        }
        else
        {
           this.step+= 1
        }
        

      },
      async finish () {
        try{
          const points = this.getQuestions.map((item) => item.points)

          const payload = {
            "points" :  points.reduce((acum,value)=> acum + value , 0 ) 
          }
          const respuesta= await axios.put(`https://fleyknow-backend.onrender.com/api/user/AcumPoints?id=${this.getUser._id}`, payload);
          const res=respuesta.data.body
          localStorage.setItem('storedUser', JSON.stringify(res));

          this.$router.push({name: 'Dashboard'})
        }
        catch(error){
          console.log(error)

        }

      }
    }
    

}

</script>

<style>
#card {
display: flex;
 width: 90%;
 height: 30vh !important;
 justify-self: center;
 align-items: center;
 align-content: center;
 justify-items: center;
 justify-content: center;
 border-color:#cffc96 !important ;
}
#respuestas {
  display: flex ;
  align-items: center;
  justify-items: center;
  justify-content: center !important;
  width: 30vmin;
  height: 20vh !important;
}
.containerquestion {
    
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;

background-color:transparent;
}
.container-res {
  grid-column: 2;
  grid-row: 2;
}
.container-cards {
    
display: flex;
justify-content: center;
align-items: center;
width: 100%;


background-color:transparent;
}
containerquestion{
  width: 100%;
}
.container-card {
    
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 20%;

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
    justify-content: center;
    background-color: white;
    width: 80%;
    height: 80%;
    min-width: 30rem;
    overflow-y: auto;
}

.btn-question {
  margin: 5vh;
  width: 40%;
  height: 4rem !important;
  min-width: 10rem;
  
}


</style>