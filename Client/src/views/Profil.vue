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
			{{ reservation }}
			<br>
			
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
import { putUpdateRendezVousDispo } from '../services/service';

export default {
	setup() {
		const { userInfo } = useAuthedUser();

		function showRendezVous (){
				//TODO get API to fetch rendezvous
		}
		showRendezVous()

		function annuler(){
			const data = {
				date: date,
				time: time,
				available: false
			}
			putUpdateRendezVousDispo(data)
			//TODO DELETE RENDEZVOUS
		}
		return {
			userInfo,
			annuler,
			showRendezVous
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
