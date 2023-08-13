<template>
  <div href="#" class="btn-flotante"><v-img :width="30" aspect-ratio="16/9" cover src="../../assets/butter2.gif"  class="butter"></v-img></div>
</template>

<script>
export default {

}
</script>

<style>
.btn-flotante {
    align-content: center;
    align-items: center;
	font-size: 16px; 
	text-transform: uppercase; 
	font-weight: bold; 
	color: #ffffff; 
	border-radius: 50%; 
	letter-spacing: 2px; 
	padding: 18px 30px; 
	position: fixed;
	bottom: 40px;
	right: 40px;
    width: 15rem;
    height: 15rem;
	transition: all 300ms ease 0ms;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	z-index: 99;
    
}

@media only screen and (max-width: 600px) {
.btn-flotante {
		font-size: 14px;
		padding: 12px 20px;
		bottom: 20px;
		right: 20px;
	}
} 

.butter {
    width: 3rem !important;
    height: 3rem !important;
}

</style>