
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
    <el-form label-width="50px" width="80%">
      <el-form-item label="菜名">
        <el-input v-model="menuDialog.values.name"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="menuDialog.values.detail"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="menuDialog.values.tag"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          class="upload-demo"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :auto-upload="false"
          :limit="1"
          list-type="picture-card"
          :on-exceed="handleExceed"
          :file-list="menuDialog.fileList"
        >
          <i class="el-icon-plus"></i>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="menuDialog.isShow = false">取 消</el-button>
        <el-button type="primary" @click="formSubmit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  setup() {
    const { ctx }: any = getCurrentInstance();
    console.log();

    //表格
    let tableData = reactive({
      data: [],
    });
    async function getDate() {
      let a = await ctx.$http.get(ctx.$Api.get("menu"));
      tableData.data = a.data;
    }
    //弹出框
    let menuDialog = reactive({
      isShow: false,
      handle: () => {
        menuDialog.isShow = !menuDialog.isShow;
      },
      form: [
        {
          type: "input",
          label: "菜名",
          value: "",
        },
        {
          type: "input",
          label: "图片",
          value: "",
        },
        {
          type: "input",
          label: "描述",
          value: "",
        },
        {
          type: "input",
          label: "角标",
          value: "",
        },
      ],
      values: {
        name: "",
        detail: "",
        tag: "",
        pic: [],
      },
      fileList: [],
      formRule: {},
    });

    function handleRemove(file: any, fileList: any) {
      console.log(file, fileList);
    }
    function handlePreview(file: any) {
      console.log(file);
    }
    function handleExceed(files: string | any[], fileList: string | any[]) {
      ctx.$message.warning(
        `超出数量无法继续添加`
      );
    }
    function beforeRemove(file: { name: any }, fileList: any) {
      return ctx.$confirm(`确定移除 ${file.name}？`);
    }
    function formSubmit() {
      // menuDialog.values.pic=menuDialog.fileList；
      console.log(menuDialog.values);
      ctx.$http.post(ctx.$Api.get("menu"),menuDialog.values)
    }
    onMounted(() => {
      getDate();
    });
    return {
      tableData,
      menuDialog,
      formSubmit,
      beforeRemove,
      handleExceed,
      handlePreview,
      handleRemove,
    };
  },
});
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
