<template>
    <div class="footer">
        <div class="contact">
            <ul>
                <li>
                    <p>Telephone: (514) 555-5555</p>
                </li>
                <li>
                    Couriel: SalonBoisDeBoulogne@gmail.com
                </li>
                <li>
                    Address: 10555 Ave de Bois-de-Boulogne, Montreal, Quebec H4N 1L4
                </li>
            </ul>
        </div>

        <div class="socialMedia">
            <a href="https://www.facebook.com/college.de.bois.de.boulogne/" target="_blank" rel="noopener noreferrer">
                <fa color="black" icon="fa-brands fa-facebook" size="4x" />
            </a>
            <a href="https://twitter.com/collegebdeb?lang=en" target="_blank" rel="noopener noreferrer">
                <fa color="black" icon="fa-brands fa-twitter"  size="4x" />
            </a>
            <a href="https://www.instagram.com/collegebdeb/?hl=en" target="_blank" rel="noopener noreferrer">
                <fa color="black" icon="fa-brands fa-instagram"  size="4x" />
            </a>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
.footer{
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: pink;
    bottom: 0;
    height: 80px;
    align-self: flex-end;
    justify-content: space-between;

}

.contact {
    color: black;
    margin: 3px;
}

.socialMedia {
    display: inline-flex;
    padding: 10px;
    gap: 2rem;
}   
ul {
    list-style-type: none;
}


</style>