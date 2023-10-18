import App from './Componentes/PaginaInicial/Home.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;