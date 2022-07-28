<template>
  <el-table
    :data="
      data.filter(
        (data) =>
          !search || data.email.toLowerCase().includes(search.toLowerCase())
      )
    "
    @selection-change="handleSelectionChange"
    :border="true"
    height="400"
    style="width: 100%"
    stripe
  >
    <el-table-column type="expand" width="70">
      <template slot-scope="props">
        <div>
          <svg-icon name="user" />
          {{ props.row.name }}
        </div>
        <div>
          <svg-icon name="password" />
          {{ props.row.password }}
        </div>
        <div>
          <svg-icon name="guide-2" />
          {{ props.row.adress }}
        </div>
      </template>
    </el-table-column>

    <el-table-column type="selection" width="55"> </el-table-column>

    <el-table-column
      v-for="label in labels"
      :key="label.name"
      :prop="label.name.toLowerCase()"
      :label="label.name"
      :width="label.width"
      class="header"
    >
    </el-table-column>

    <el-table-column
      prop="roles"
      label="Role"
      :filters="roles"
      :filter-method="filterTag"
      width="200"
    >
      <template slot-scope="scope">
        <el-tag
          v-for="role in Object.values(scope.row.roles)"
          :key="role"
          :type="
            role === 'admin' ? 'primary' : role === 'dev' ? 'success' : 'info'
          "
          disable-transitions
          >{{ role }}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column align="right" width="auto">
      <template slot="header">
        <el-input v-model="search" size="mini" placeholder="Type to search" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IUser } from '@/module/user';

@Component({
  name: 'UserTable',
})
export default class extends Vue {
  @Prop({ required: true }) data!: [];

  private search = '';

  private listUserSendTask: Array<IUser> = [];

  private labels = [
    { name: 'Id', width: '100' },
    { name: 'Email', with: '300' },
  ];
  private roles = [
    {
      text: 'admin',
      value: 'amdin',
    },
    {
      text: 'dev',
      value: 'dev',
    },
    {
      text: 'user',
      value: 'user',
    },
  ];
  filterTag(value: any, row: any, column: any) {
    return row[column['property']].some((role: string) =>
      [value].includes(role)
    );
  }
  handleSelectionChange(value: Array<IUser>) {
    this.listUserSendTask = value;
  }
}
</script>

<style lang="scss" scope>
.el-tag + .el-tag {
  margin-left: 5px;
}

thead {
  tr {
    th:not(:first-child) {
      background-color: #333 !important;
      .cell {
        color: white !important;
        font-size: 16px !important;
      }
    }
  }
}

.el-table__body-wrapper {
  font-size: 15px;
  .el-table__body {
    tbody {
      tr {
        .el-table__cell {
          padding-left: 10px;
          div + div {
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>
