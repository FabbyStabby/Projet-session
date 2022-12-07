<template>
    <div class="page-profile">
        <div class="profile">
            Username: {{ userInfo.name }}
            <br>
            Email: {{ userInfo.email }}
            <br>
            Telephone: {{ userInfo.telephone }}
            <br>

        </div>

        <div class="reservation">
            Reserations: 
            <br>
            <button class="btn">
                Modifer
            </button>

            <button class="btn">
                Annulé
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
.page-profile{
    display: flex;
    flex-direction: row;
    
 }
</style>