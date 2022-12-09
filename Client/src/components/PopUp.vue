<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
            <button
                class="btn"
                @click="$emit('close')"
            >
                Fermer
            </button>
		</div>
	</div>
</template>

<style scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner{
    background: white;
    padding: 32px;
    border-radius: 10px;
}
</style>
