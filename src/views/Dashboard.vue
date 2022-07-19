<template>
  <div class="about">
    <h1>This is an dashboard</h1>
    <button-comp
      title="Logout"
      type="warning"
      :action="handleLogout"
    ></button-comp>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonComp from '@/components/button/index.vue';
import { UserModule } from '@/store/modules/user';

@Component({
  name: 'Dashboard',
  components: {
    ButtonComp,
  },
})
export default class extends Vue {
  private handleLogout() {
    console.log('handleLogout');
  }
}
</script>
