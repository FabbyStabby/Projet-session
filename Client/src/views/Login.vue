<template>
    <div class="container">
        <div class="loginBox">
            <h1>Login</h1>
            <div class="txt_field">
                <label>Email</label>
                <br>
                <input type="text" required>
            </div>
            <div class="txt_field">
                <label>Password</label>
                <br>
                <input type="password" required>
            </div>
            <input type="submit" value="Login">
        
        </div>

        <div class="registerBox">
            <h1>Register</h1>
            <div class="txt_field">
                <label>Name</label>
                <br>
                <input type="text" required>
                
            </div>
            <div class="txt_field">
                <label>Last name</label>
                <br>
                <input type="text" required>
            </div>
            <div class="txt_field">
                <label>Phone number</label>
                <br>
                <input type="text" required>
            </div>
            <div class="txt_field">
                <label>Email</label>
                <br>
                <input type="text" required>
            </div>
            <div class="txt_field">
                <label>Password</label>
                <br>
                <input type="password" required>
            </div>
            <input type="submit" value="Register">
        </div>
    </div>
</template>

<script>

</script>

<style>
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .loginBox, .registerBox{
        background-color: white;
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

</style>