<template>
  <div class="center-container">
    <div>
      <v-card class="card-loging">
        <v-card-text>
          <div class="logo-container">
            <img src="../assets/Logo.png" >
          </div>
          <v-form >
            <v-text-field label="Nombre"   v-model="firstname" :rules="rules"></v-text-field>
            <v-text-field label="Apellido"  v-model="lastname" :rules="rules"></v-text-field>
          </v-form>
          <v-btn variant="outlined" @click="crearUsuario" class="yolanda" :rules="rules" :disabled="disableButton"> Iniciar</v-btn>
        </v-card-text>
      </v-card>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'


  
export default {
  
  
    data() {
      return {
        firstname: '',
        lastname: '',
        rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters']}},
    
    computed: {
      disableButton() {
      return !(this.firstname && this.lastname);
    }
    },

    
    methods:{
      async crearUsuario ( ) {
      try {
      console.log(`Nombre : ${this.firstname}`);
      console.log(`Apellido ${this.lastname}`);

      const payload = {
        name : this.firstname,
        lastname: this.lastname
      }
      

      const respuesta =  await axios.post('http://localhost:3000/api/user/NewUser', payload);
      const res=respuesta.data.body;

      console.log(typeof(res));
      
      localStorage.setItem('storedUser', JSON.stringify(res));
      this.$router.push({ name: 'Dashboard' });
    } 
    catch (error) {
      console.error('Error al llamar a la Create User:', error);
    }
      

    }

    }
}
</script>

<style>

.center-container {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh; 
}
v-btn {
  width: 15 rem;
}
.yolanda { 
  color: #ef7c9d !important;;
  border-width: 3px !important;
}

.card-loging{
  width: 30rem;
  height: auto;
  text-align: center;
  padding: 20px;
}

#input {
  margin: 2px;
  border-radius: 25%;
}


img {
  max-width: 100%;
  max-height: 100%;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>