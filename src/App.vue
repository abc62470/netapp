<template>
  <div id="app">
  	<transition name="fold">
    	<router-view class="view"></router-view>
	</transition>
	  <div class="mask" @touchmove.prevent v-show="isMaskShow">
	  	<span class="mask-text">Loading ...</span>
	  </div>
  </div>
</template>

<script type="ecmascript-6">

export default {
	computed:{
		isMaskShow(){
			return this.$store.state.isMaskShow;
		}
	}
}
</script>

<style lang="less" scoped>
  #app{
    color: #343638;
	overflow-x: hidden;


/*     .fold-enter-active{
	// animation: fold-in 0.5;
	transition: opacity .5s;
	opacity: 1;
}

.fold-leave-active{
	// animation: fold-out 0.5;
	transition: opacity .5s;
	opacity: 0;
} */

	.view{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.mask{
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 8000;
		background: rgba(0, 0, 0, 0.87);

		.mask-text{
			font-size: 22px;
			font-weight: bold;
			color: #fff;
			letter-spacing: 3px;
		}
	}

    .fold-enter-active {
      animation: fold-in .5s;
    }

    .fold-leave-active {
      animation: fold-out .5s;
    }

    @keyframes fold-in {
      0% {
        transform: translate3d(50%, 0, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fold-out {
      0% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
      100% {
        transform: translate3d(-30%, 0, 0);
        opacity: 0;
      }
    }
  }
</style>
