<template>
  <section class="ManagerUser-container">
    <h1>List User</h1>
    <user-table :data="data" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserTable from '@/components/table/UserTable.vue';
import { IUser } from '@/module/user';

@Component({
  name: 'ManagerUser',
  components: {
    UserTable,
  },
})
export default class extends Vue {
  private data: IUser[] = [
    {
      id: '1',
      name: 'Tom 1',
      email: 'tom1@gmail.com',
      password: 'Los Angeles',
      adress: 'No. 189, Grove St, Los Angeles',
      roles: ['admin'],
    },
    {
      id: '2',
      name: 'Tom 2',
      email: 'tom2@gmail.com',
      password: 'Los Angeles',
      adress: 'No. 189, Grove St, Los Angeles',
      roles: ['admin', 'user'],
    },
    {
      id: '3',
      name: 'Tom 3',
      email: 'tom3@gmail.com',
      password: 'Los Angeles',
      adress: 'No. 189, Grove St, Los Angeles',
      roles: ['admin'],
    },
    {
      id: '4',
      name: 'Tom 4',
      email: 'tom4@gmail.com',
      password: 'Los Angeles',
      adress: 'No. 189, Grove St, Los Angeles',
      roles: ['admin', 'dev'],
    },
    {
      id: '5',
      name: 'Tom 5',
      email: 'tom5@gmail.com',
      password: 'Los Angeles',
      adress: 'No. 189, Grove St, Los Angeles',
      roles: ['admin', 'dev'],
    },
  ];
}
</script>
<style lang="scss">
.ManagerUser-container {
  width: 90%;
  margin: auto;
  margin-top: 100px;
}
</style>
