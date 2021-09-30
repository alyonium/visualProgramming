<template>
  <div>
    <h3 v-if="watching">{{ deal.title }}</h3>
    <el-input
      v-if="editing"
      v-model="editedDeal.title"
      class="input head"
      placeholder="Заголовок"
    />
  </div>

  <span class="duration">
    Начало:
    <span v-if="watching">{{ deal.start }}</span>
    <el-input v-if="editing" v-model="editedDeal.start" class="input" placeholder="Время" />

    , продолжительность:
    <span v-if="watching">{{ deal.duration }}</span>
    <el-input v-if="editing" v-model="editedDeal.duration" class="input" placeholder="Время" />
  </span>

  <span v-if="!isEdit" class="editButton" @click="editDeal(deal)">✎</span>
  <span v-if="!isEdit" class="editButton" @click="removeDeal(deal)">✗</span>

  <span v-if="editing" class="editButton" @click="saveDeal(deal)">✓</span>

  <p v-if="watching" class="message">{{ deal.text }}</p>
  <el-input
    v-if="editing"
    type="textarea"
    :rows="3"
    class="message"
    v-model="editedDeal.text"
    placeholder="Что будем делать?"
    resize="none"
  />
</template>

<script>
import { ref, defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Deal',
  props: {
    deal: {
      type: Object,
      required: true,
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['editDeal', 'removeDeal', 'saveDeal'],
  setup(props, { emit }) {
    const editedDeal = ref({});

    const watching = computed(() => {
      return !props.isEdit || (props.isEdit && editedDeal.value.id !== props.deal.id);
    });

    const editing = computed(() => {
      return props.isEdit && editedDeal.value.id === props.deal.id;
    });

    const editDeal = (deal) => {
      editedDeal.value = { ...deal };
      emit('editDeal', deal);
    };

    const removeDeal = (deal) => {
      emit('removeDeal', deal);
    };

    const saveDeal = () => {
      emit('saveDeal', editedDeal.value);
      editedDeal.value = {};
    };

    return {
      editDeal,
      removeDeal,
      saveDeal,
      editedDeal,
      watching,
      editing,
    };
  },
});
</script>

<style lang="scss">
.editButton {
  cursor: pointer;
  margin-left: 8px;
  background: white;
  padding: 4px;
  border-radius: 3px;
}

.input {
  max-width: 70px;

  &.head {
    max-width: 290px;
    margin-bottom: 20px;
  }
}
</style>
