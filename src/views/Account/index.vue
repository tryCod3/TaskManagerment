<template>
  <keep-alive>
    <component :is="componentRequire"></component>
  </keep-alive>
</template>

<script lang="ts">
import MyInfomation from './component/MyInfomation.vue';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  name: 'Account',
  components: {
    MyInfomation,
  },
})
export default class extends Vue {
  private componentRequire: any;

  @Watch('$route', {
    immediate: true,
    deep: true,
  })
  private setComponentRequire() {
    const { name } = this.$route;
    switch (name) {
      case 'my-infor':
        this.componentRequire = MyInfomation;
        break;
      default:
        break;
    }
  }
}
</script>

<style></style>
