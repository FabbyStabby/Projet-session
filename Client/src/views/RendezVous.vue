<template>
<div class="container">
    <h1>Prendre un rendez-vous</h1>
    <div class="reservationForm">
      <div class="calender">
      <Datepicker
        v-model="date"
        lang='fr'
        date-format="{
          day:'2-digit',
          month:'2-digit',
          year: 'numeric'
          }"
      /> 
      </div>

      <div class="heure-De-Reservation">
        <button 
          v-for="btn in availableHours"
          class="btn" 
          :key="btn.value"
          @click="(showPopup = true, selectHour(btn.value))"
          
        >
          {{ btn.name }}
        </button>

      </div>
      <PopUp
      v-if="showPopup"
      @close="showPopup = false"
      >
        <h2>Confirmer votre rendez-vous:</h2>
        <div class="reservation">
          <h3>
            Le {{ formatedDate }} a {{ selectedHour }}
          </h3>
        </div>
        <button
          class="btnPopUp"
          @click="reserver(formatedDate, selectedHour, userInfo.username)"
        >
        Reserver</button>
      </PopUp>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';
import { getTimeService, 
  postReserverRendezVous,
  putUpdateRendezVousDispo 
} from '../services/service'
import PopUp from '../components/PopUp.vue'
import { useAuthedUser } from '../composables/authComposable';

export default {
  components: {
    Datepicker: VueDatepickerUi,
    PopUp
    
  },

  setup() {
    const { userInfo } = useAuthedUser();

    const date = ref();
    const availableHours = ref([]);
    const selectedHour = ref();
    const formatedDate = computed(() => {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric'}
      const dateToFormate = new Date(date.value);
      return dateToFormate.toLocaleDateString("en-GB", options);
      
    });
    
    const showPopup = ref(false)
    
    
    async function updateAvailHours() {
      // Fetch stuff
      const res = await getTimeService(formatedDate.value);
       
      availableHours.value = [];
      

      for (let index = 0; index < res.data.length; index++) {
        availableHours.value[index] = {
          name: res.data[index],
          value: res.data[index]
        }
        
       }
      
    }

    watch(
      formatedDate,
      updateAvailHours, 
      { immediate: true }
    );

    function selectHour(hour) {
      selectedHour.value = hour;
    } 

    async function reserver(date, time, username) {
      const data = {
        date: date,
        time: time,
        username: username
      }
      const data2 = {
        date: date,
        time: time,
        available: false
      }
      try{
        await postReserverRendezVous(data);
        await putUpdateRendezVousDispo(data2);
        await updateAvailHours();
        showPopup.value = false;
      } catch (err) {
        alert('Vous avez dejas un rendez vous')

      }

    }

    
    return { 
      userInfo,
      date,
      availableHours,
      selectedHour,
      selectHour,
      formatedDate,
      PopUp,
      showPopup,
      reserver
    };
  }
}

</script>

<style scoped>
  .reservationForm{
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-items: left;
    flex-wrap: wrap;
    background-color: rgb(252, 209, 216);
    border-radius: 10px;
    height: auto;
    padding: 40px 20px 40px 20px;
    text-align: left;
    width: 100%;
    margin: 80px 40px 80px 40px;
    color: #000;
    max-width: 400px;
   }


  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.2);
   }
   
   .calender{
    margin: 10px;
   }

   .btn {
      background-color: rgb(255, 255, 255);
    }
    .btn:hover{
      background-color: rgb(252, 228, 232);
    }
    .btnPopUp {
      background-color: pink;
      width: 100px;
      height: 40px;
      margin: 10px;
      border-radius: 5px;
      border-color: transparent;
    }
    .btnPopUp:hover{
      background-color: rgb(252, 228, 232);
    }
</style>
