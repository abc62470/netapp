<template>
	<div class="main">
    <vHeader></vHeader>
    <router-view class="container"></router-view>
    <vTab></vTab>
  </div>
</template>

<script type="ecmascript-6">
  import vHeader from '@/components/header/header.vue';
	import vTab from '@/components/tab/tab.vue';

  export default{
    data(){
      return{
      }
    },
    created(){
      this.getSoData();
    },
    methods: {
      getSoData(){
        var storeId = this.$store.state.id;
        var localStorageId = localStorage.id;
        if (storeId != localStorageId && localStorageId != undefined) {
          this.$http.get('/soData.json').then(response => {
            let soData = response.data.so.filter(el => el.soNo.includes(localStorageId))[0];
            this.$store.state.id = localStorageId;
            this.$store.state.soData = soData;
            this.$store.state.isInfo = true;
            console.log('get');
          }).catch(response => {
            console.log(response);
          });
        }
      }
    },
    components: {
      vHeader,
      vTab
    }
  }
</script>

<style lang="less" scoped>
  .main{
    .container{
      padding: 44px 0 49px;
    }
  }
</style>