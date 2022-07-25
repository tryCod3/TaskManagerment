<template>
  <el-container direction="vertical">
    <el-footer height="100vh">
      <el-row span="24" class="footer">
        <el-col>
          <login />
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonComp from '@/components/button/index.vue';
import Login from './component/Login.vue';

@Component({
  name: 'Logio',
  components: {
    Login,
    ButtonComp,
  },
})
export default class extends Vue {
  private handleActionLogio() {
    console.log('hello from logio');
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  .el-col {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #222222;
  }
}
</style>
