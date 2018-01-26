import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home.vue';
import ServiceDesc from '@/components/content/service_desc.vue';
import ETAOnsite from '@/components/content/eta_onsite.vue';
import RepairInfo from '@/components/content/repair_info.vue';
import Complete from '@/components/content/complete.vue';
import Search from '@/components/header/search.vue';

Vue.use(Router)

export default new Router({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			redirect: '/ServiceDesc'
		},
		{
			path: '/Home',
			name: 'home',
			component: Home,
			children: [
				{
					path: '/ServiceDesc',
					name: 'ServiceDesc',
					component: ServiceDesc
				},
				{
					path: '/ETAOnsite',
					name: 'ETAOnsite',
					component: ETAOnsite
				},
				{
					path: '/RepairInfo',
					name: 'RepairInfo',
					component: RepairInfo
				},
				{
					path: '/Complete',
					name: 'Complete',
					component: Complete
				}
			]
		},
		{
			path: '/Search',
			name: 'Search',
			component: Search
		}
	]
})
