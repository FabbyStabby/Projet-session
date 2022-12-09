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
			Rendez-Vous: 
			<br>
			{{ rendezVous }}
			<br>
			
			<button 
				class="btn"
				v-if="hasRendezVous"
				@click="(showPopup = true)"
			>
				Annuler
			</button>
			<PopUp
				v-if="showPopup"
				@close="showPopup = false"
				>
					<h2>Voulez vous annuler votre rendez vous:</h2>
					<h3> Le {{ date }} a {{ time }}</h3>
					<button
						class="btn"
						@click="annuler()"
					>
					Annuler
					</button>
				</PopUp>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useAuthedUser } from '../composables/authComposable';
import { putUpdateRendezVousDispo, deleteAnnulerRendezVous, getRendezVous } from '../services/service';
import PopUp from '../components/PopUp.vue'

export default {
	components: {
		PopUp
	},
	
	setup() {
		const { userInfo } = useAuthedUser();
		const date = ref();
		const time = ref();
		const showPopup = ref(false)
		const hasRendezVous = ref(false)
		const rendezVous = ref('')
		
		
		async function showRendezVous (){
			try{
				const res = await getRendezVous(userInfo.value.username);
					date.value = res.data.date
					time.value = res.data.time
					hasRendezVous.value = true
					rendezVous.value = date.value + ' ' + time.value
			} catch (err) { 
				hasRendezVous.value = false
				rendezVous.value = 'Vous n\'avez pas de rendez-vous'
			}
		}
		
		
		async function annuler(){
			const data = {
				date: date.value,
				time: time.value,
				available: true
			}
			await deleteAnnulerRendezVous(userInfo.value.username)
			await putUpdateRendezVousDispo(data)
			await showRendezVous();
			showPopup.value = false;
		}
		
		
		
		showRendezVous();

		return {
			userInfo,
			annuler,
			showRendezVous,
			date,
			time,
			showPopup,
			PopUp,
			hasRendezVous,
			rendezVous,
			
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
