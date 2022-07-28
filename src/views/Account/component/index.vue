<template>
  <layout-router />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LayoutRouter from '@/layout/router.vue';

@Component({
  name: 'router-account',
  components: {
    LayoutRouter,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped></style>
