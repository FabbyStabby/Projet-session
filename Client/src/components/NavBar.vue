<template>
    <nav>  
      <div class="info">
        <router-link to="/" class="nav-item nav-link">Acceueil</router-link>
        <router-link to="/RendezVous" class="nav-link">Rendez-Vous</router-link>
      </div>
      <div class="connection">
        <template v-if="isLoggedIn">
        
          <a @click="logout">Logout</a>
        </template>
        <template v-else>
          <router-link to="/profil" class="">Profile</router-link>
          <router-link to="/login">Login</router-link>
        </template>
      </div>
    </nav>
</template>

<script>


</script>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  nav {
    width: 100%;
    font-size: 20px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    background-color: pink;
    
  }

  nav .router-link-exact-active {
    color: rgb(52, 136, 72);
  }

  nav .router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {

    padding: 0 2rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  .info {
    text-align: left;
  }

  .connection {
    text-align: right;
    flex-grow: 1;
  }
  
  a,
.green {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 0.4s;
}

@media (hover: hover) {
 a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  
}
</style>