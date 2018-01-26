<template>
	<div class="header">
		<div class="avatar">
			<img :src="avater" alt="" width="35" height="35">
		</div>
		<div class="soNum">
			{{soNum}}
		</div>
		<div class="search">
			<i class="netappIcon icon-search"></i>
		</div>
	</div>
</template>

<script type="ecmascript-6">
export default{
	data(){
		return{
			name: '',
			avater: '',
			soNum: ''
		}
	},
	props: {
		user: Object
	},
	created(){
		this.getUserData();
		this.getSoNum();
	},
	methods: {
		getUserData(){
			this.$http.get('/api/userData.json')
			.then(response => {
				console.log(response);
				console.log('成功');
				this.name = response.data.name;
				this.avater = response.data.avater;
			},response => {
				console.log(response);
				console.log('失败');
			})
		},
		getSoNum(){
			this.soNum = this.$store.state.soNum;
		}
	}
}
</script>

<style lang="less" scoped>
.header{
	display: flex;
	justify-content: center;
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
		}
	}
}
</style>