<template>
  <el-menu
    mode="horizontal"
    :defaultActive="1"
    @select="handleSelect"
    background-color="#b39ddb"
    text-color="#2c3e50"
    active-text-color="#2c3e50"
  >
    <el-sub-menu index="1">
      <template #title>menu</template>
      <el-menu-item index="2-1">duplicate</el-menu-item>
      <el-menu-item index="2-2">pin</el-menu-item>
      <el-menu-item index="2-3">reload</el-menu-item>
      <el-menu-item index="2-4">close</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElMenu, ElSubMenu, ElMenuItem } from 'element-plus';

const CLOSE = '2-4';

export default defineComponent({
  name: 'Menu',
  components: {
    ElMenu,
    ElSubMenu,
    ElMenuItem,
  },
  emits: ['handleSelect'],
  setup(props, { emit }) {
    const handleSelect = (key: string) => {
      if (key === CLOSE) {
        emit('handleSelect');
      }
    };

    return {
      handleSelect,
    };
  },
});
</script>

<style lang="scss">
.el-sub-menu__title {
  border-bottom: none !important;
}
</style>
