<template>
	
		<div
			v-if="userInfo" 
			class="page-profile"
		>
			<div class="profile">
				<span class="info">
					Username:
				</span>
					{{ userInfo.username }}
				<br>
					
				
				<span class="info">
					Prenom:
				</span>
					{{ userInfo.prenom }}
				<br>
					
				
				<span class="info">
					Nom:
				</span>
					{{ userInfo.nom }}
				<br>
				
					
				<span class="info">
					Email:
				</span>
					{{ userInfo.email }}
				<br>
				
					
				<span class="info">
					Phone:
				</span> 
					{{ userInfo.phone }}
				<br>
				
			</div>

			<div class="reservation">
				<span class="info"> Votre Rendez-Vous: 
					<br>
				</span>
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
							class="btnPopUp"
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

<style scoped>
.page-profile {
	display: flex;
	flex-direction: row;
	justify-items: center;
	justify-content: space-around;
	border-radius: 10px;
	background-color: rgba(0,0,0,.2);
	
	
 }

 .info {
    font-size: 20px;
		


 }
 .profile, .reservation{
	
		background-color: rgb(252, 209, 216);
		border-radius: 10px;
		padding: 20px;
		height: max-content;
		margin: 25px;
		

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
