<template>
  <div class="diary">
    <div class="calendar-wrapper">
      <ElCalendar v-model="selectedDay">
        <template #dateCell="{ data }">
          <div :class="checkIsDealsPlanned(data.date) ? 'planned' : ''"></div>
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-')[2] }}
            {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </ElCalendar>
    </div>
    <div class="deals">
      <h1>Мои дела</h1>
      <div v-if="checkIsDealsPlanned(selectedDay)">
        <li v-for="deal in findedDay.works" :key="deal.title">
          <h3>{{ deal.title }}</h3>
          <span class="duration">
            Начало: {{ convertTime(deal.start) }}, продолжительность: {{ deal.duration }}
          </span>
          <p class="message">{{ deal.text }}</p>
        </li>
      </div>
      <div v-else>Ничего не запланировано =(</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { ElCalendar } from 'element-plus';
import diary from './diary.json';

export default defineComponent({
  name: 'Diary',
  components: {
    ElCalendar,
  },
  setup() {
    const diaryData = ref(diary);
    const selectedDay = ref(new Date());
    const findedDay = ref({});

    const convertDate = (date) => {
      const currentDate = new Date(date);

      const d = currentDate.getDate();
      const m = currentDate.getMonth();
      const y = currentDate.getFullYear();

      return `${d}-${m + 1}-${y}`;
    };

    const convertTime = (date) => {
      const currentDate = new Date(date);

      const h = currentDate.getHours();
      const m = currentDate.getMinutes();

      if (m.toString().length === 1) {
        return `${h}:0${m}`;
      }
      return `${h}:${m}`;
    };

    const checkIsDealsPlanned = (day) => {
      findedDay.value = diaryData.value.find((item) => {
        return convertDate(item.date) === convertDate(day);
      });

      return findedDay.value;
    };

    return {
      diaryData,
      selectedDay,
      findedDay,
      convertTime,
      checkIsDealsPlanned,
      convertDate,
    };
  },
});
</script>

<style lang="scss">
.diary {
  display: flex;
  width: 800px;
}

.calendar {
  &-wrapper {
    width: 50%;
  }
}

.deals {
  width: 50%;
  height: 100%;
  background: #9575cd;
}

.is-selected {
  color: #9575cd;
}

.planned {
  background: #9575cd;
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
}

.duration {
  font-size: 12px;
}

.message {
  background: #d1c4e9;
  margin: 10px 20px;
  padding: 10px;
  border-radius: 4px;
}
</style>
