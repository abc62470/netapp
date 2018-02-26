<template>
    <div class="service-container">
    	<div v-if="isInfo">
	    	<div class="customer-top">
	    		<div class="customer-soId">
		    		{{soData.soNo}}
		    	</div>
		    	<div class="customer-nameMain">
		    		<div class="name">{{soData.contactPerson}}</div>
		    		<div class="code">{{soData.customer}}</div>
		    	</div>
		    	<router-link class="customer-address" to="/Map">
		    		<div class="text">
		    			{{soData.address}}
		    		</div>
		    		<i class="netappIcon icon-greater-than"></i>
		    	</router-link>
	    	</div>
	    	<div class="hr"></div>
	    	<div class="customer-info">
	    		<div class="info-main" v-for="(value,key) in soData" v-if="soDataFilter(key)">
	    			<div class="key">{{key}}</div>
	    			<div class="value">{{value}}</div>
	    		</div>
	    	</div>
	    </div>
    </div>
</template>

<script type="ecmascript-6">
import { mapState } from 'vuex'

export default{
	data(){
		return{
			filter:['soNo', 'contactPerson', 'customer', 'address']
		}
	},
	computed:{
		...mapState({
			soData: state => state.soData
		}),
		isInfo(){
			console.log(this.$store.state.isInfo);
			return this.$store.state.isInfo
		}
	},
	methods:{
		soDataFilter(key){
			return this.filter.every((el) => {
				return !(key == el);
			})
		}
	}
}

</script>

<style lang="less" scoped>
    .service-container{

    	.customer-top{
    		padding: 0 20px;

			.customer-soId{
				font-size: 26px;
				font-weight: bold;
				margin: 40px 0 10px;
			}


			.customer-nameMain{
				margin-bottom: 20px;

				.name{
					display: inline-block;
					font-size: 20px;
					font-weight: bold;
					margin-right: 8px;
				}
				
				.code{
					display: inline-block;
					color: #8f959c;
				}
			}

			.customer-address{
				display: flex;
				border-top: 1px solid #e1e4e6;
				padding: 20px 0;
				color: #343638;

				.text{
					flex: 1 1 auto;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}

				.icon-greater-than{
					flex: 0 1 50px;
					text-align: right;
				}
			}
    	}

    	.customer-info{
    		padding: 0 20px;

    		.info-main{
    			display: flex;
    			justify-content: space-between;
    			padding: 19px 0;
				border-top: 1px solid #e1e4e6;

				&:first-child{
					border-top: none;
				}

    			.key{
    				font-size: 16px;
    			}

    			.value{
    				font-size: 14px;
    				color: #8f959c;
    			}
    		}
    	}
    }
</style>