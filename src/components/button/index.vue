<template>
  <el-row>
    <el-button :type="type" @click="action" :plain="plain" :loading="loading">{{
      title
    }}</el-button>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Button',
})
export default class extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ required: true }) private action!: Function;
  @Prop({ default: 'primary' }) private type!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: false }) private plain!: boolean;
  @Prop({ default: false }) private loading!: boolean;
}
</script>

<style></style>
