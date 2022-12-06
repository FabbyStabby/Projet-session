<template>
  <div class="reservation">
  <h1>Prendre un rendez-vous</h1>
    
    <Datepicker 
    lang='en'/>

    <div class="heure-De-Reservation">
      <button class="btn"> time </button>
    </div>

    <div class="reserver">
      <button class="btn">Reserver</button>
    </div>

  </div>
</template>

<script>
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';

export default {
    components: {
      Datepicker: VueDatepickerUi
    }
  }

</script>

<style scoped>
   .reservation{
    display: flex;
    flex-direction: column;
    margin: 10px;
   }


   .btn{
    background-color: white;
    width: 100px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    border-color: transparent;
   }

   .btn:hover{
    background-color: rgb(252, 228, 232);
   }

</style>