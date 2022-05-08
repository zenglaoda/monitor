import { createRouter, createWebHashHistory, RouterView } from 'vue-router';
import { h } from 'vue';

const routerView = {
	render() {
		return h(RouterView);
	}
};

const routes = [
	{ 
		path: '/projects', 
		component: () => import('../pages/project/index.vue') 
	},
	{
		path: '/', 
		component: () => import('../layout/index.vue'),
		children: [
			{
				path: '',
				component: () => import('../pages/dashboard/index.vue') 
			},
			{
				path: 'script',
				component: routerView,
				children: [
					{
						path: '',
						component: () => import('../pages/script/index.vue'),
					},
					{
						path: 'item',
						component: () => import('../pages/script/item.vue'),
					},
				],
			},
		]
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((from, to, next) => {
	next();
});