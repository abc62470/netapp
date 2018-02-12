<template>
    <div class="search-container">
        <div class="search-header">
            <div class="left" @click="back">
               <i class="netappIcon icon-left"></i>
           </div>
           <div class="title">
               {{title}}
           </div>
           <div class="right">
           </div>
        </div>
        <div class="search-main">
            <i class="netappIcon icon-search"></i>
            <input type="text" placeholder="请输入Vendor No." class="search-text" v-model="search">
        </div>
        <div class="list-main">
            <div class="list-content clearfix" v-for="list in searchData" @click="getSoId(list.number)">
                <div class="list-number">{{list.number}}</div>
                <div class="list-user">{{list.user}}</div>
                <div class="list-map">{{list.map}}</div>
             </div>
        </div>
   </div>
</template>

<script type="ecmascript-6">
export default{
    data() {
        return{
            title:'查询列表',
            search: '',
            listDatas: []
        }
    },
    created() {
        this.getListData();
    },
    computed:{
        searchData() {
            if (this.search) {
                return this.listDatas.filter((item) => (
                        item.number.toLowerCase().includes(this.search)
                    ));
            } else {
                return this.listDatas;
            }
        }
    },
    methods: {
        getListData() {
            this.$http.get('/api/listData.json')
            .then(response => {
                this.listDatas = response.data.list;
            }, response => {
                console.log(response);
            })
        },
        getSoId(id){
            // this.$store.state.id = id;
            localStorage.id = id;
            this.$router.push({path: '/ServiceDesc'});
        },
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
.search-container{
    .search-header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        width: 100%;
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

    .search-main{
        position: fixed;
        top: 44px;
        left: 0;
        z-index: 2;
        padding: 0px 10px;
        width: 100%;
        height: 45px;
        line-height: 45px;
        background: #fff;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .09);

        .search-text{
            font-size: 12px;
            color: #6e7378;
            width: 100%;
            height: 29px;
            line-height: 29px;
            padding: 0 10px 0 36px;
            background: #e9e9e9;
            border: none;
            border-radius: 0;
        }

        .icon-search{
            position: absolute;
            left: 20px;
            top: 2px;
            color: #9fa5ad;
        }
    }

    .list-main{
        position: relative;
        z-index: 0;
        margin-top: 91px;

        .list-content{
            font-size: 14px;
            padding: 18px 20px;
            border-bottom: 5px solid #f2f2f2;

            .list-number{
                font-size: 18px;
                font-weight: bold;
                float: left;
                margin-bottom: 14px;
            }

            .list-user{
                color: #14acda;
                float: right;
                margin-bottom: 14px;
            }

            .list-map{
                width: 100%;
                color: #6e7378;
                float: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
</style>