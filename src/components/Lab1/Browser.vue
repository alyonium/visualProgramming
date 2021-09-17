<template>
  <div class="browser-window">
    <div class="browser-window__buttons">_ ⬓ x</div>

    <Menu @handleSelect="handleSelect" />

    <Tabs
      @removeTab="removeTab"
      @updateCurrentTab="updateCurrentTab"
      :tabs="tabs"
      :modelValue="currentTab"
      @update:modelValue="updateCurrentTab"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Menu from '@/components/Lab1/Browser/Menu.vue';
import Tabs from '@/components/Lab1/Browser/Tabs.vue';

export default defineComponent({
  name: 'Lab1',
  components: {
    Menu,
    Tabs,
  },
  setup() {
    const currentTab = ref('2');

    const tabs = ref({
      facebook: true,
      spacex: true,
    });

    const updateCurrentTab = (newVal) => {
      currentTab.value = newVal;
    };

    const handleSelect = () => {
      if (currentTab.value === '1') {
        tabs.value.facebook = false;
        updateCurrentTab('2');
      } else {
        tabs.value.spacex = false;
        updateCurrentTab('1');
      }
    };

    const removeTab = (targetTab) => {
      if (targetTab === '1') {
        tabs.value.facebook = false;
        updateCurrentTab('2');
      } else {
        tabs.value.spacex = false;
        updateCurrentTab('1');
      }
    };

    return {
      handleSelect,
      removeTab,
      currentTab,
      updateCurrentTab,
      tabs,
    };
  },
});
</script>

<style scoped lang="scss">
.browser {
  &-window {
    width: 800px;
    height: 600px;
    border: 4px solid #836fa9;
    border-radius: 8px;

    &__buttons {
      height: 24px;
      padding: 4px 8px;
      border-radius: 4px 4px 0 0;
      display: flex;
      justify-content: flex-end;
      background: #836fa9;
      cursor: default;
      user-select: none;
    }
  }
}
</style>
