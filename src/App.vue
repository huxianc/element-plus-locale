<!--
 * @Description: 
 * @Author: huxianc
 * @Date: 2021-01-11 11:24:17
 * @LastEditors: huxianc
 * @LastEditTime: 2021-01-11 11:51:06
-->
<template>
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
    console.log(this.$ELEMENT);
  }
};
</script>

<style lang="scss"></style>
