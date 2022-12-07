<template>
    <div
        v-if="userInfo" 
        class="page-profile"
    >
        <div class="profile">
            Username:  {{ userInfo.username }}
            <br>
            Prenom: {{ userInfo.prenom }}
            <br>
            Nom: {{ userInfo.nom }}
            <br>
            Email: {{ userInfo.email }}
            <br>
            Telephone: {{ userInfo.phone }}
            <br>
        </div>

        <div class="reservation">
            Reservation: 
            <br>
            {{ userInfo.reservation }}
            <br>
            <button 
                class="btn"
                @click="modifer()"
            >
                Modifer
            </button>

            <button 
                class="btn"
                @click="annuler()"
            >
                Annuler
            </button>
        </div>
    </div>
</template>

<script>
import { useAuthedUser } from '../composables/authComposable';

export default {
    setup() {
        const { userInfo } = useAuthedUser();

        return {
            userInfo
        }
    }
}
</script>

<style>
.page-profile {
    display: flex;
    flex-direction: row;
    justify-content: left;
 }

 .profile {
    flex-grow: .5;
 }
</style>
