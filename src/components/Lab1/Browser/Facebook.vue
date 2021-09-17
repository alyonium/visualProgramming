<template>
  <el-row>
    <el-col :span="4">
      <div>
        <div class="block">
          <el-avatar
            :size="100"
            src="https://cs7.pikabu.ru/images/big_size_comm/2019-09_5/1569036307112274735.jpg"
          ></el-avatar>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="name">
        Котёночек Домашний
        <br />
        Москва
        <br />
        18 лет
      </div>
    </el-col>
    <el-col :span="2" :offset="11">online</el-col>
  </el-row>
  <el-row>
    <el-col :span="8" :offset="8">Стена</el-col>
  </el-row>
  <el-row :gutter="24">
    <el-col :span="8" :offset="8">
      <el-input
        type="textarea"
        v-model="news"
        placeholder="Что нового, Котёночек?"
        resize="none"
      ></el-input>
      <el-button color="#e6ceff" id="add-button">Добавить</el-button>
    </el-col>
  </el-row>
  <el-row class="wall" :gutter="24">
    <el-col :span="8" :offset="8">
      <Post text="Я покушал"></Post>
      <Post text="Я хочу спать"></Post>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElRow, ElCol, ElAvatar } from 'element-plus';
import Post from '@/components/Lab1/Browser/Post.vue';

export default defineComponent({
  name: 'Facebook',
  components: {
    ElRow,
    ElCol,
    ElAvatar,
    Post,
  },
  setup() {
    const news = ref('');

    return {
      news,
    };
  },
});
</script>

<style scoped lang="scss">
.name {
  height: 100%;
  display: flex;
  text-align: left;
  align-items: center;
}

.wall {
  margin-top: 24px;
}

#add-button {
  margin-top: 8px;
  background: #e6ceff;

  &:active {
    border-color: #b39ddb;
  }
}
</style>
