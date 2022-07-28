<template>
  <el-container>
    <el-aside class="bg-side-bar">
      <side-bar />
    </el-aside>
    <el-container>
      <layout-router />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SideBar from '@/components/sidebar/index.vue';
import LayoutRouter from './router.vue';

@Component({
  name: 'Layout',
  components: {
    SideBar,
    LayoutRouter,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped></style>
