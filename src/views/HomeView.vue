<script setup lang="ts">
import { Plus, Compass } from '@element-plus/icons-vue';
import { ref } from 'vue';

const tableData = ref([]);
</script>

<template>
  <div class="padding-20">
    <h1 class="font-weight-100 text-center">问卷系统</h1>
    <div class="mb-15">
      <el-button type="primary" :icon="Plus">创建问卷</el-button>
      <el-button type="success" :icon="Compass">组件市场</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column label="创建日期" prop="createDate" width="150"></el-table-column>
      <el-table-column label="问卷标题" prop="title"></el-table-column>
      <el-table-column
        label="题目数"
        prop="surveyCount"
        width="150"
        align="center"
      ></el-table-column>
      <el-table-column
        label="最近更新日期"
        prop="updateDate"
        width="150"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" width="300" align="center">
        <template>
          <el-button type="primary" size="mini">查看问卷</el-button>
          <el-button type="primary" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
