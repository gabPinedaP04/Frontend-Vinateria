import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LoginScreen from '../views/LoginScreen.vue'
import TestScreen from '../views/TestScreen.vue'
import CreateProduct from '../views/CreateProduct.vue'


const routes = [
	{
		name: 'LoginScreen',
		path: '/',
		component: LoginScreen
	},
	{
		name: 'About',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'Home',
		path: '/Home',
		component: Home
	},

	{
		name: 'Blank',
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	},
	{
		test: 'Test',
		path: '/test',
		component: TestScreen
	},
	{
		name: 'Create',
		path: '/Create',
		component: CreateProduct
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
