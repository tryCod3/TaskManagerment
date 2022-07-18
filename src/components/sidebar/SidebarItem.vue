<template>
  <div v-if="item.meta && !item.meta.hidden">
    <el-menu-item v-if="!item.children">
      <svg-icon
        v-if="item.meta && item.meta.icon"
        :name="item.meta.icon"
      ></svg-icon>
      {{ ' ' }}
      {{ item.meta.title }}
    </el-menu-item>
    <el-submenu v-else :index="item.name">
      <template slot="title">
        <svg-icon
          v-if="item.meta && item.meta.icon"
          :name="item.meta.icon"
        ></svg-icon>
        {{ ' ' }}
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="children in item.children"
        :key="children.path"
        :item="children"
      >
      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

@Component({
  name: 'SidebarItem',
})
export default class extends Vue {
  @Prop({ required: true }) private item!: RouteConfig;
}
</script>

<style lang="scss">
.el-menu {
  background-color: rgb(33, 34, 36);
  .el-submenu__title,
  .el-menu-item {
    color: white;
  }
  .el-submenu__title {
    font-size: 1.5rem;
  }
  .el-submenu__title:hover {
    background-color: rgb(134, 131, 131);
    .el-icon-arrow-down {
      color: black;
    }
  }
  .el-menu-item:hover {
    background-color: rgb(183, 179, 179);
  }
}
.el-menu--inline {
  background-color: rgb(72, 68, 68);
}

.svg-fill {
  fill: rgb(100, 100, 211);
}
</style>
