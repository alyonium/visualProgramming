<template>
  <el-tabs v-model="currentTab" type="card" closable @tab-remove="removeTab" color="#2c3e50">
    <el-tab-pane v-if="tabs.facebook" :key="1" label="Facebook" name="1" color="#2c3e50">
      <Facebook />
    </el-tab-pane>
    <el-tab-pane v-if="tabs.spacex" :key="2" label="SpaceX" name="2" is-active="#2c3e50">
      <SpaceX />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { computed } from 'vue';
import { ElTabs } from 'element-plus';
import Facebook from './Facebook.vue';
import SpaceX from './SpaceX.vue';

export default {
  name: 'Tabs',
  components: {
    ElTabs,
    SpaceX,
    Facebook,
  },
  props: {
    tabs: {
      type: Object,
      default: () => ({}),
    },
    modelValue: String,
  },
  emits: ['removeTab', 'updateCurrentTab'],
  setup(props, { emit }) {
    const removeTab = (targetName) => {
      emit('removeTab', targetName);
    };

    const currentTab = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    return {
      currentTab,
      removeTab,
    };
  },
};
</script>

<style lang="scss">
.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: #836fa9;
}
</style>
