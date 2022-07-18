<template>
  <div v-if="item.meta && !item.meta.hidden">
    <el-menu-item v-if="oneChild !== undefined">
      <svg-icon
        v-if="oneChild.meta && oneChild.meta.icon"
        :name="oneChild.meta.icon"
      ></svg-icon>
      {{ ' ' }}
      <router-link :to="getPath(oneChild.path)">
        <span>
          {{ oneChild.meta.title }}
        </span>
      </router-link>
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
        :path="getPath(children.path)"
      >
      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path';
import { Vue, Prop, Component } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

@Component({
  name: 'SidebarItem',
})
export default class extends Vue {
  @Prop({ required: true }) private item!: RouteConfig;
  @Prop({ default: '' }) private path!: string;

  get oneChild() {
    if (!this.item.children) {
      return { ...this.item, path: '' };
    }
    if (
      this.item.children &&
      this.item.children.length === 1 &&
      this.item.children[0].meta &&
      !this.item.children[0].meta.hidden
    ) {
      return this.item.children[0];
    }
    return undefined;
  }

  private getPath(router_path: string) {
    console.log(path.resolve(this.path, router_path));
    return path.resolve(this.path, router_path);
  }
}
</script>

<style lang="scss">
.el-menu {
  background-color: rgb(33, 34, 36);
  .el-submenu__title {
    color: rgb(227, 207, 30);
  }
  .el-menu-item > a {
    color: white;
    text-decoration: none;
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

.el-aside {
  height: 100vh;
}
</style>
