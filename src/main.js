import App from './Componentes/singin-page/singin-page.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;