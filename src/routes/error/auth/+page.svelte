<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div>Debes estar registrado</div>
<button on:click={() => goto('/login')}> LogIn</button>
