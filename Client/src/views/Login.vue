<template>
	<div class="container">
		<div class="loginBox">
			<h1>Login</h1>
				<div class="txt_field">
					<label>Username</label>
					<br>
					<input
						v-model="username"
						type="text"
						name="username" 
						required
					>
				</div>
				<div class="txt_field">
					<label>Password</label>
					<br>
					<input 
						v-model="password"
						type="password" 
						name="password"  
						required>
				</div>
					<button
						class="btn"
						@click="attemptLogin()"
					>
						Login
					</button>
			</div>

		<div class="registerBox">
			<h1>Register</h1>
			<div class="txt_field">
				<label>Username</label>
				<br>
				<input 
					v-model="usernameR"
					type="text" 
					name="usernameR" 
					required>
			</div>
			<div class="txt_field">
				<label>Password</label>
				<br>
				<input 
					v-model="passwordR"
					type="password" 
					name="passwordR" 
					required>
			</div>
			<div class="txt_field">
				<label>Prenom</label>
				<br>
				<input 
					v-model="prenom"
					type="text" 
					name="prenom" 
					required>
			</div>
			<div class="txt_field">
				<label>Nom</label>
				<br>
				<input 
					v-model="nom"
					type="text" 
					name="nom" 
					required>
			</div>
			<div class="txt_field">
				<label>Phone number</label>
				<br>
				<input
					v-model="phoneNum" 
					type="text" 
					name="phonenumber" 
					required>
			</div>
			<div class="txt_field">
				<label>Email</label>
				<br>
				<input 
					v-model="email"
					type="email" 
					name="email" 
					required>
			</div>
			<button class="btn" @click="register()">Register</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { loginAuth } from '../services/authService'
import { useAuthedUser } from '../composables/authComposable';
import { registerUserService } from '../services/service'

export default {

	setup() {
		const { login } = useAuthedUser();

		const username = ref('');
		const password = ref('');
		
		const usernameR = ref('');
		const passwordR = ref('');
		const prenom = ref('')
		const nom = ref('')
		const phoneNum = ref('');
		const email = ref ('');

		// examples
		async function attemptLogin() {
			try  {
				const res = await loginAuth(username.value, password.value);
				login(res.data);
				
			} catch (err) {
				alert('Username/Password invalide')
				
			}
		}

		async function register() {
			const data = {
				username: usernameR.value,
				password: passwordR.value,
				prenom: prenom.value,
				nom: nom.value,
				phone: phoneNum.value,
				email: email.value
			}
			try{
				await registerUserService(data);
			} catch (err) {
				alert('Username dejas utiliser')
			}
		}

		return {
			attemptLogin,
			register,
			username,
			password,
			usernameR,
			passwordR,
			prenom,
			nom,
			phoneNum,
			email,
		}
	}
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .loginBox, .registerBox{
        background-color: rgb(252, 209, 216);
        border-radius: 10px;
        height: auto;
        padding: 40px 20px 40px 20px;
        text-align: left;
        width: 100%;
        margin: 80px 40px 80px 40px;
        color: #000;
        max-width: 400px;
      
    
    }

    .txt_field {
        padding: 5px;
    } 
    
    .btn {
        background-color: rgb(255, 255, 255);
    }
    .btn:hover{
      background-color: rgb(252, 228, 232);
    }

</style>