<template>
	<div class="header">
		<div class="avatar">
			<img :src="avater" alt="" width="35" height="35">
		</div>
		<div class="soNum">
			{{soId}}
		</div>
		<router-link class="search" to="/Search">
			<i class="netappIcon icon-search"></i>
		</router-link>
		<!-- <div class="search">
			<i class="netappIcon icon-search"></i>
		</div> -->
	</div>
</template>

<script type="ecmascript-6">
export default{
	data(){
		return{
			name: '',
			avater: ''
		}
	},
	props: {
		user: Object
	},
	created(){
		this.getUserData();
		// this.getSoNum();
	},
	computed:{
		soId(){
			return this.$store.state.id;
		}
	},
	methods: {
		getUserData(){
			this.$http.get(`${this.API_URL}/userData.json`)
			.then(response => {
				console.log(response);
				console.log('成功');
				this.name = response.data.name;
				this.avater = response.data.avater;
			},response => {
				console.log(response);
				console.log('失败');
			})
		}/*,
		getSoNum(){
			if(this.$store.state.id){
				this.soNum = this.$store.state.id;
			}
		}*/
	}
}
</script>

<style lang="less" scoped>
.header{
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	height: 44px;
	line-height: 44px;
	padding: 0 10px;
	text-align: center;
	color: #fff;
	background: linear-gradient(to right, #3298d8, #61b1e4);

	.avatar, .search{
		flex: 0 1 35px;
	}

	.avatar{
		padding-top: 4px;

		img{
			border-radius: 50%;
		}
	}

	.soNum{
		flex: auto;
		font-size: 16px;
	}

	.search{
		text-align: right;

		.icon-search{
			font-size: 22px;
			color: #fff;
		}
	}
}
</style>