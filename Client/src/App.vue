<template>
  <!-- Step 3: Add component to template -->
  <NavBar 
    :user-info="userInfo"
    @logout="logout"
  />
  <router-view class="views" />
  <Footer class="footer" />
</template>

<script>
import { ref, provide } from 'vue';

// Step 1: Import of component
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  //Step2: Add component to export default
  components: {
    NavBar,
    Footer
  },

  setup() {
    const userInfo = ref({ name: 'My Name'});

    function toggleLoggin(newUserInfo) {
      if (newUserInfo) {
        userInfo.value = newUserInfo;
      } else {
        userInfo.value = undefined
      }
    }

    provide('user-info', [userInfo, toggleLoggin]);

    function logout() {
      userInfo.value = undefined;
    }

    return {
      userInfo,
      logout
    };
  }
};

</script>

<style scoped>
.footer{
  align-self: flex-end;
}

.views{
  flex: 1;
}
</style>

<style> 
#app {
  display: flex;
  justify-content: space-between;
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