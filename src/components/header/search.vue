<template>
    <div class="search-container">
        <div class="search-header">
            <div class="left">
               <i class="netappIcon icon-left"></i>
           </div>
           <div class="title">
               {{title}}
           </div>
           <div class="right">
           </div>
       </div>
       <div class="list-main">
           {{listData}}
       </div>
   </div>
</template>

<script type="ecmascript-6">
export default{
    data() {
        return{
            title:'查询列表',
            listData: {}
        }
    },
    created() {
        this.getListData();
    },
    methods: {
        getListData() {
            this.$http.get('/api/listData.json')
            .then(response => {
                console.log(typeof response.data);
                console.log(response.data);
                this.listData = response.data;
            }, response => {
                console.log(response);
                console.log("shibai");
            })
        }
    }
}
</script>

<style lang="less" scoped>
.search-container{
    .search-header{
        display: flex;
        justify-content: center;
        height: 44px;
        line-height: 44px;
        padding: 0 10px;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right, #3298d8, #61b1e4);

        .left, .right{
          flex: 0 1 35px;
        }

        .left{
          text-align: left;
        }

        .title{
          flex: auto;
          font-size: 16px;
          font-weight: bold;
        }

        .right{
          text-align: right;
        }
    }

}
</style>