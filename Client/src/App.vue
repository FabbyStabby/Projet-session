<template>
  <!-- Step 3: Add component to template -->
  <NavBar />
  <router-view class="views" />
  <Footer class="footer" />
</template>

<script>
import { ref, provide, onMounted } from 'vue';

// Step 1: Import of component
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { setupAuthLogin } from './composables/authComposable';

export default {
  name: "App",
  //Step2: Add component to export default
  components: {
    NavBar,
    Footer
  },

  setup() {
    const { userInfo } = setupAuthLogin();

    return { userInfo };
  }
};

</script>

<style scoped>
.footer{
  margin-top: auto;
  
}

.views{
  flex: 1;
}
</style>

<style> 
#app {
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;  
  min-height: 100%;
 
}


html, body {
  height: 100%;
  margin: 0;
}
</style>