<template>
  <div class="home">
    <el-container>
      <el-aside class="bg-side-bar"><SideBar /></el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>main</el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/sidebar/index.vue';
@Component({
  components: {
    SideBar,
  },
})
export default class HomeView extends Vue {}
</script>
