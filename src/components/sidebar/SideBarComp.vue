<template>
  <div class="sidebar">
    <el-menu default-active="1" @open="handleOpen">
      <el-submenu index="12">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>Account</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>Information</el-menu-item>
          <el-menu-item>Login</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>Task</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>List Task</el-menu-item>
          <el-menu-item>Create Task</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
export default class SideBarComp extends Vue {
  // method
  handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
}
</script>
