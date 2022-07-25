<template>
  <el-container>
    <el-aside class="bg-side-bar"><side-bar /></el-aside>
    <el-container>
      <section class="app-main">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </section>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SideBar from '@/components/sidebar/index.vue';

@Component({
  name: 'Layout',
  components: {
    SideBar,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
}
</style>
