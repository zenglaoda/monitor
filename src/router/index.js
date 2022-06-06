import { createRouter, createWebHashHistory, RouterView } from 'vue-router';
import { h } from 'vue';
import { store } from '@/store';

const routerView = {
	render() {
		return h(RouterView);
	}
};

const routes = [
	{
		path: '/project', 
		component: () => import('@/pages/project/index.vue') 
	},
	{
		path: '/signin',
		component: () => import('@/pages/signin/index.vue')
	},
	{
		path: '/', 
		component: () => import('@/layout/index.vue'),
		children: [
			{
				path: '',
				component: () => import('@/pages/dashboard/index.vue') 
			},
			{
				path: 'script',
				component: routerView,
				children: [
					{
						path: '',
						component: () => import('@/pages/script/index.vue'),
					},
					{
						path: 'item',
						component: () => import('@/pages/script/item.vue'),
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


function checkProject(to) {
	if (to.path !== '/project' && !store.state.project) {
		return ({ path: '/project' });
	}
}


router.beforeEach((to, from) => {
	const validators = [
		checkProject
	];

	for (let i = 0; i < validators.length; i++) {
		const route = validators[i](to, from);
		if (route) {
			return route;
		}
	}
});