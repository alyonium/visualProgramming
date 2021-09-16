<template>
  <el-row>
    <el-col :span="4">
      <div>
        <div class="block">
          <el-avatar
            :size="100"
            src="https://lh3.googleusercontent.com/proxy/UO3LdouDK4vJ2x-Dz36ZTJT7Ko-EP5cW36N58gQ-PvomE7u5ZgY4igtxKtrFLwWPCEEasEBjbBgp77WSFg_Bz_9iaUJUZWjniDH9U6pQlZIJd0iK9zDc-32LeGk"
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
      <el-button color="#e6ceff" class="add-button">Добавить</el-button>
    </el-col>
  </el-row>
  <el-row class="wall" :gutter="24">
    <el-col :span="8" :offset="8">
      <div class="post">
        <div class="wall__name">
          <el-avatar
            :size="30"
            src="https://lh3.googleusercontent.com/proxy/UO3LdouDK4vJ2x-Dz36ZTJT7Ko-EP5cW36N58gQ-PvomE7u5ZgY4igtxKtrFLwWPCEEasEBjbBgp77WSFg_Bz_9iaUJUZWjniDH9U6pQlZIJd0iK9zDc-32LeGk"
          ></el-avatar>
          <span>Котёночек</span>
        </div>
        <div>Я хочу спать</div>
      </div>

      <div class="post">
        <div class="wall__name">
          <el-avatar
            :size="30"
            src="https://lh3.googleusercontent.com/proxy/UO3LdouDK4vJ2x-Dz36ZTJT7Ko-EP5cW36N58gQ-PvomE7u5ZgY4igtxKtrFLwWPCEEasEBjbBgp77WSFg_Bz_9iaUJUZWjniDH9U6pQlZIJd0iK9zDc-32LeGk"
          ></el-avatar>
          <span>Котёночек</span>
        </div>
        <div>Я покушал</div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElRow, ElCol, ElAvatar } from 'element-plus';

export default defineComponent({
  name: 'Facebook',
  components: {
    ElRow,
    ElCol,
    ElAvatar,
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

  &__name {
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }

  & .post {
    margin-bottom: 24px;
    background: #e6ceff;
    padding: 8px;
    border-radius: 4px;
  }
}

.add-button {
  margin-top: 8px;
  background: #e6ceff;

  &:active {
    border-color: #b39ddb;
  }
}
</style>
