<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'LayoutRouter',
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
}
</style>
