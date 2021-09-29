<template>
  <div class="calendar-wrapper">
    <ElCalendar v-model="selectedDay">
      <template #dateCell="{ data }">
        <div :class="checkIsDealsPlanned(diaryData, data.date) ? 'planned' : ''"></div>
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-')[2] }}
          {{ data.isSelected ? '✔️' : '' }}
        </p>
      </template>
    </ElCalendar>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { ElCalendar } from 'element-plus';
import { convertDate } from '@/helpers/Diary/convertDate';
import { checkIsDealsPlanned } from '@/helpers/Diary/checkIsDealPlanned';

export default defineComponent({
  name: 'DiaryCalendar',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    diaryData: {
      type: Object,
      required: true,
    },
  },
  components: {
    ElCalendar,
  },
  setup(props, { emit }) {
    const selectedDay = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    return {
      selectedDay,
      convertDate,
      checkIsDealsPlanned,
    };
  },
});
</script>

<style scoped lang="scss"></style>
