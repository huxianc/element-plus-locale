<!--
 * @Description: 
 * @Author: huxianc
 * @Date: 2021-01-11 11:24:17
 * @LastEditors: huxianc
 * @LastEditTime: 2021-02-05 15:28:55
-->
<template>
  <el-button type="primary" @click="show = true">111</el-button>
  <el-button type="primary" @click="show2 = true">222</el-button>

  <el-dialog title="123" v-model="show" width="30%">
    <span></span>
    <template #footer>
      <el-button @click="show = false">Cancel</el-button>
      <el-button type="primary" @click="show = false">OK</el-button>
    </template>
  </el-dialog>
  <el-dialog title="123" v-model="show2" width="30%">
    <span></span>
    <template #footer>
      <el-button @click="show2 = false">Cancel</el-button>
      <el-button type="primary" @click="show2 = false">OK</el-button>
    </template>
  </el-dialog>

  <el-transfer v-model="value" :data="data" />
  <el-table :data="tableData" border stripe>
    <el-table-column
      v-for="col in columns"
      :prop="col.id"
      :key="col.id"
      :label="col.label"
      :width="col.width"
    >
    </el-table-column>
  </el-table>
  <el-pagination
    v-model:current-page="params.page"
    :page-size="params.size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalNum"
    background
  >
  </el-pagination>

  <el-popconfirm :title="`确定删除该规则？`">
    <template #reference>
      <el-button type="danger" size="mini" style="margin-left: 10px"
        >删除</el-button
      >
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: "App",
  data() {
    // eslint-disable-next-line no-unused-vars
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      show: false,
      show2: false,
      data: generateData(),
      value: [],
      tableData: [],
      columns: [
        {
          label: "测试列1",
          prop: "test"
        }
      ],
      params: {
        page: 1,
        size: 10
      }
    };
  },
  mounted() {
    console.log(this);
  }
};
</script>

<style lang="scss"></style>
