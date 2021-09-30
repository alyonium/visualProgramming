<template>
  <div class="deals">
    <h1>Мои дела</h1>
    <ul v-if="findedDay || isAdding">
      <li v-if="isAdding">
        <div>
          <el-input v-model="addingDeal.title" class="input head" placeholder="Заголовок" />
        </div>

        <span class="duration">
          Начало:
          <el-input v-model="addingDeal.start" class="input" placeholder="Время" />
          , продолжительность:
          <el-input v-model="addingDeal.duration" class="input" placeholder="Время" />
        </span>
        <span class="editButton" @click="addDeal">✓</span>

        <el-input
          type="textarea"
          :rows="3"
          class="message"
          v-model="addingDeal.text"
          placeholder="Что будем делать?"
          resize="none"
        />
      </li>

      <li v-else v-for="deal in findedDay.works" :key="deal.title">
        <Deal
          :deal="deal"
          @removeDeal="removeDeal"
          @editDeal="editDeal"
          @saveDeal="saveDeal"
          :isEdit="isEdit"
        />
      </li>
    </ul>

    <div v-else>Ничего не запланировано =(</div>

    <el-button v-if="!isEdit && !isAdding" class="addButton" @click="isAdding = true">
      Добавить
    </el-button>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { checkIsDealsPlanned } from '@/helpers/Diary/checkIsDealPlanned';
import Deal from '@/components/Lab2/Deal.vue';

export default defineComponent({
  name: 'DiaryDealsSide',
  props: {
    selectedDay: {
      type: String,
    },
    diaryData: {
      type: Object,
      required: true,
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Deal,
  },
  emits: ['editDeal', 'removeDeal', 'saveDeal'],
  setup(props, { emit }) {
    const isAdding = ref(false);

    const emptyDeal = {
      title: '',
      text: '',
      start: '',
      duration: '',
    };

    const findedDay = computed(() => {
      return checkIsDealsPlanned(props.diaryData, props.selectedDay);
    });

    const addingDeal = ref({ ...emptyDeal });

    const editDeal = (deal) => {
      emit('editDeal', deal);
    };

    const removeDeal = (deal) => {
      emit('removeDeal', deal);
    };

    const saveDeal = (deal) => {
      emit('saveDeal', deal);
    };

    const addDeal = () => {
      emit('addDeal', addingDeal.value);
      isAdding.value = false;
      addingDeal.value = { ...emptyDeal };
    };

    return {
      findedDay,
      isAdding,
      addingDeal,
      removeDeal,
      editDeal,
      saveDeal,
      addDeal,
    };
  },
});
</script>

<style scoped lang="scss">
ul {
  marker: none;
  padding: 0;
  overflow: scroll;
  margin-top: 0;
  max-height: 500px;
}
</style>
