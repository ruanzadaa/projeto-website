<script>
    import {Home} from './PaginaInicial/Home.svelte'

    import {estado} from '../Estado'
</script>

{#if $estado === 'Home'}
        <home/>
    
{:else if $estado === 'Singin'}
    <singin/>

{/if}