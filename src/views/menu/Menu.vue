
<template>
  <div class="menuBox">
    <div class="buttonBox">
      <el-button
        type="primary"
        size="small"
        icon="el-icon-plus"
        @click="menuDialog.handle"
        >添加菜品</el-button
      >
    </div>
    <el-table :data="tableData.data" class="table" border>
      <el-table-column prop="_id" label="id" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="pic" label="图片"> </el-table-column>
    </el-table>
  </div>

  <el-dialog
    title="提示"
    v-model="menuDialog.isShow"
    width="30%"
    :before-close="menuDialog.close"
  >
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="menuDialog.isShow = false">取 消</el-button>
        <el-button type="primary" @click="menuDialog.isShow = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>

  <div class="menuform" v-if="menuShow">添加菜单</div>
</template>

<script lang="typescript">
import { onMounted, reactive, ref } from "vue";
import http from "@/config/telnet/http";
import api from "@/config/telnet/api";
export default {
  data() {
    return {};
  },
  setup() {
    //表格
    let tableData = reactive({
      data: [],
    });
    async function getDate() {
      let a = await http.get(api.get("menu"));
      tableData.data = a.data;
    }
    //弹出框
    let menuDialog = reactive({
      isShow: false,
      handle: () => {
        menuDialog.isShow = !menuDialog.isShow;
      },
      close: () => {
        
      },
    });

    onMounted(() => {
      getDate();
    });
    
    return {
      tableData,
      menuDialog,
    };
  },
};
</script>

<style lang="scss" scope>
.menuBox {
  padding: 10px;
  .buttonBox {
    margin-bottom: 10px;
  }
  .table {
    margin: 0 auto;
  }
}

.menuform {
  width: 200px;
  height: 200px;
  border: 1xp solid #666666;
}
</style>
