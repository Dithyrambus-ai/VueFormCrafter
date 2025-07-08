<template>
  <div>
    <div class="container flex self-start align-items-center border-box" >
      <div class="left flex justify-start align-items-center">
        <el-button circle size="small" icon="el-icon-arrow-left" @click="handleBack">返回</el-button>
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { useRouter } from 'vue-router';
const router = useRouter();

const handleBack = () => {
  router.push('/')
}

</script>

<style lang="scss" scoped>


</style>
