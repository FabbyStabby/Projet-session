<template>
  <div class="reservation">
  <h1>Prendre un rendez-vous</h1>
    
    <Datepicker
      v-model="date"
      lang='en'
    />

    <div class="heure-De-Reservation">
      <span>{{ selectedHour }}</span>
      <button 
        v-for="btn in availableHours" 
        :key="btn.value"
        @click="selectHour(btn.value)"
      >
        {{ btn.name }}
      </button>

      <select v-model="selectedHour">
        <option :value="undefined"> -- </option>
        <option
          v-for="opt in availableHours"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.name }}
        </option>
      </select>
      <button class="btn"> time </button>
    </div>

    <div class="reserver">
      <button class="btn">Reserver</button>
    </div>

  </div>
</template>

<script>
import { ref, watch } from 'vue';
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';

export default {
  components: {
    Datepicker: VueDatepickerUi
  },

  setup() {
    const date = ref();
    const availableHours = ref([]);
    const selectedHour = ref();
    
    function updateAvailHours() {
      // Fetch stuff
      // Parse data corerectly
      // availableHours.value = new data as an array that was parsed

      // temporary 
      availableHours.value = [
        {
          name: 'BUTTON 1',
          value: 1

        },
        {
          name: 'BUTTON 2',
          value: 2

        },
        {
          name: 'BUTTON 3',
          value: 3

        },
        {
          name: 'BUTTON 4',
          value: 4
        }
      ];
    }

    watch(
      date,
      updateAvailHours, 
      { immediate: true }
    );

    function selectHour(hour) {
      selectedHour.value = hour;
    }

    return { 
      date,
      availableHours,
      selectedHour,
      selectHour,
    };
  }
}

</script>

<style scoped>
   .reservation{
    display: flex;
    flex-direction: column;
    margin: 10px;
   }


   

</style>