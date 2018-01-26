<template>
	<div class="main">
    <vHeader></vHeader>
    <router-view></router-view>
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
    },
    methods: {},
    components: {
      vHeader,
      vTab
    }
  }
</script>

<style lang="less" scoped>
</style>