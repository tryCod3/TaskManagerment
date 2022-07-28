<template>
  <section class="myinformation-container">
    <user-form />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserForm from '@/components/form/UserForm.vue';

@Component({
  name: 'MyInformation',
  components: {
    UserForm,
  },
})
export default class extends Vue {}
</script>

<style lang="scss">
.myinformation-container {
  width: 50%;
  margin: auto;
  margin-top: 100px;
}
</style>
