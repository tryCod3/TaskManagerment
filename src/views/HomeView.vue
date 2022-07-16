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
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SideBar from '@/components/sidebar/SideBarComp.vue';
@Component({
  components: {
    HelloWorld,
    SideBar,
  },
})
export default class HomeView extends Vue {}
</script>
