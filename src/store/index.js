import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		id: '请选择SO单',
		isMaskShow: false,
		isInfo: false,
		soData: {}
	}
})

export default store;