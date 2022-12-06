<template>
    <div class="page-profile">
        <div class="profile">
            Prenom: {{}}
            <br>
            Nom: {{}}
            <br>
            Email: {{}}
            <br>
            Telephone: {{}}
            <br>

        </div>

        <div class="reservation">
            Reserations: {{}}
            <br>
            <button class="btn">Modifer</button> <button class="btn">Annulé</button>

        </div>

    </div>
</template>

<script>

</script>

<style>
.page-profile{
    display: flex;
    flex-direction: row;
    
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