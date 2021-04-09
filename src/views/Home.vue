<template>
  <div class="home">
    <div class="menu">menu</div>
    <div class="container">
      <div class="nav">
        <el-menu>
           <el-menu-item index="1">菜单管理</el-menu-item>
        </el-menu>
      </div>
      <div class="body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
<style scoped lang="scss">
div {
  // border: 1px dashed;
}
.home {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .menu {
    height: 40px;
    border-bottom: 1px solid ;
  }
  .container {
    flex: 1;
    display: flex;
    .nav {
      width: 200px;
      background: #f6f6f6;
      border-right: 1px solid;
    }
    .body {
      flex: 1;
    }
  }
}
</style>
