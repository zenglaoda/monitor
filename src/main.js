import './assets/style/app.less';
import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';
import { router } from './router';
import { subscribeScriptError, scriptErrorListener } from '@/track';

subscribeScriptError(scriptErrorListener);

createApp(App)
	.use(router)
	.use(store)
	.mount('#app');

