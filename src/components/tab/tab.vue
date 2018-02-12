<template>
    <div class="tab">
        <router-link class="tab-item" to="/ServiceDesc">
          <i class="netappIcon icon-tab-list-1"></i>
          <p>Service Desc</p>
        </router-link>
        <router-link class="tab-item" to="/ETAOnsite">
          <i class="netappIcon icon-tab-check"></i>
          <p>ETA/Onsite</p>
        </router-link>
        <router-link class="tab-item" to="/RepairInfo">
          <i class="netappIcon icon-tab-edit"></i>
          <p>Repair Info</p>
        </router-link>
        <router-link class="tab-item" to="/Complete">
          <i class="netappIcon icon-tab-list-2"></i>
          <p>Complete</p>
        </router-link>
    </div>
</template>

<script type="ecmascript-6">
    
</script>

<style lang="less" scoped>
    .tab{
      width: 100%;
      display: flex;
      position: fixed;
      z-index: 100;
      left: 0;
      bottom: 0;
      height: 49px;
      background: #fff;
      box-shadow: 0 -1px 3px rgba(26, 124, 175, .17);

      .tab-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        color: #6e7378;

        &.active{
          color: #48b4ed;
        }

        .netappIcon{
          width: 26px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1px;

          &.icon-tab-list-1{
            font-size: 28px;
            transform: translateY(2px);
          }

          &.icon-tab-check{
            font-size: 18px;
            transform: translateY(-2px);
          }

          &.icon-tab-edit{
            font-size: 26px;
          }

          &.icon-tab-list-2{
            font-size: 18px;
          }
        }
      }
    }
</style>