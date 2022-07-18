<template>
  <div class="sidebar">
    <el-menu default-active="1" @open="handleOpen">
      <sidebar-item
        v-for="router in routers"
        :key="router.path"
        :item="router"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { PermissionModule } from '@/store/modules/permission';
import SidebarItem from './SidebarItem.vue';

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
  },
})
export default class extends Vue {
  get routers() {
    return PermissionModule.routers;
  }

  // method
  handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
}
</script>
