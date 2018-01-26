import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ServiceDesc from '@/components/service_desc.vue';
import ETAOnsite from '@/components/eta_onsite.vue';
import RepairInfo from '@/components/repair_info.vue';
import Complete from '@/components/complete.vue';

Vue.use(Router)

export default new Router({
	linkExactActiveClass: 'active',
	routes: [
	{
		path: '/',
		redirect: '/ServiceDesc'
	},
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
})
