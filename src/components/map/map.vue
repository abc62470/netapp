<template>
    <div class="map-container">
        <div class="map-header">
            <div class="left" @click="back">
               <i class="netappIcon icon-left"></i>
           </div>
           <div class="title">
               {{title}}
           </div>
           <div class="right">
           </div>
        </div>
        <div id="allmap" class="map"></div>
        <div class="map-info">
            <div class="address valignCenter">
                <i class="netappIcon icon-mappin"></i>{{address}}
            </div>
            <div class="distance">
                <i class="netappIcon icon-cc-location"></i>{{distance}}
            </div>
        </div>
   </div>
</template>

<script type="ecmascript-6">
export default{
    data() {
        return{
            title:'地图',
            address:' ',
            distance:' '
        }
    },
    computed:{
    },
    created() {
        this.map();
        this.saveAddress();
    },
    beforeDestroy(){
        this.removeAddress();
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        saveAddress(){
            if(!localStorage.address){
                localStorage.address = this.$store.state.soData.address;
            }
            this.address = localStorage.address;
        },
        removeAddress(){
            localStorage.removeItem('address');
        },
        map(){
            var _this = this;
            this.$nextTick(() => {
                console.log(this.address);
                // 百度地图API功能
                var map = new BMap.Map("allmap", {enableMapClick:false});
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,12);
                map.enableScrollWheelZoom(true);

                //获取当前位置
                var currentPoint;
                //获取目标位置
                var targetPoint;

                var geolocation = new BMap.Geolocation();

                // 创建地址解析器实例
                var myGeo = new BMap.Geocoder();

                function getCurrentPoint(){
                    var p = new Promise(function (resolve, reject) {
                        geolocation.getCurrentPosition(function(r){
                            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                                // alert('您的位置：'+r.point.lng+','+r.point.lat);
                                currentPoint = r.point;
                                resolve();
                                // alert((map.getDistance(pointA,pointB)).toFixed(2)+' 米。')
                            }
                            else {
                                currentPoint = false;
                            }        
                        },{enableHighAccuracy: true})
                    })
                    return p;
                }

                function getTargetPoint(){
                    var p = new Promise(function (resolve, reject) {
                        // 将地址解析结果显示在地图上,并调整地图视野
                        myGeo.getPoint(_this.address, function(point){
                            if (point) {
                                map.centerAndZoom(point, 16);
                                map.addOverlay(new BMap.Marker(point));
                                targetPoint = point;
                                resolve();
                            }else{
                                alert("没有搜索到结果!");
                            }
                        });
                    })
                    return p;
                }

                function distance() {
                    if(currentPoint && targetPoint){
                        // alert((map.getDistance(currentPoint,targetPoint)).toFixed(2)+' 米。')
                        _this.distance = (map.getDistance(currentPoint,targetPoint)).toFixed(0) / 1000 + 'KM'
                    }
                }

                // var promise = Promise.resolve();

                // promise.then(getTargetPoint)
                // .then(getCurrentPoint)
                // .then(getConsole);

                Promise.all([getTargetPoint(), getCurrentPoint()])
                .then(distance);


                



                setTimeout(() => {
                    console.log(targetPoint);
                    console.log(currentPoint);
                },3000)



            })
        }
    }
}
</script>

<style lang="less" scoped>
.map-container{
    .map-header{
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

    .map{
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f2f2f2;
    }

    .map-info{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        padding: 20px;

        .address{
            margin-bottom: 10px;
            position: relative;
            padding-left: 20px;

            .icon-mappin{
                font-size: 20px;
                position: absolute;
                left: -3px;
                top: 1px;
            }
        }

        .distance{
            padding-left: 20px;
            position: relative;

            .icon-cc-location{
                font-size: 14px;
                position: absolute;
                left: 0;
                top: 3px;
            }
        }
    }
}
</style>