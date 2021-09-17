<template>
  <div class="post">
    <div class="name">
      <el-avatar
        :size="30"
        src="https://cs7.pikabu.ru/images/big_size_comm/2019-09_5/1569036307112274735.jpg"
      ></el-avatar>
      <span>Котёночек</span>
    </div>
    <div>{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  name: 'Post',
});
</script>

<style scoped lang="scss">
.post {
  margin-bottom: 24px;
  background: #e6ceff;
  padding: 8px;
  border-radius: 4px;

  & .name {
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }
}
</style>
