<template>
  <div class="diary">
    <DiaryCalendar
      @updateSelectedDay="updateSelectedDay"
      :modelValue="selectedDay"
      @update:modelValue="updateSelectedDay"
      :diaryData="diaryData"
    />
    <DiaryDealsSide
      :selectedDay="selectedDay"
      :diaryData="diaryData"
      :isEdit="isEdit"
      @removeDeal="removeDeal"
      @editDeal="editDeal"
      @saveDeal="saveDeal"
      @addDeal="addDeal"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import diary from './diary.json';
import DiaryCalendar from '@/components/Lab2/DiaryCalendar.vue';
import DiaryDealsSide from '@/components/Lab2/DiaryDealsSide.vue';
import { convertDate } from '@/helpers/Diary/convertDate';

export default defineComponent({
  name: 'Diary',
  components: {
    DiaryCalendar,
    DiaryDealsSide,
  },
  emits: ['editDeal', 'removeDeal'],
  setup() {
    const idGenerator = ref(300);
    const diaryData = ref(diary);
    const selectedDay = ref(new Date());
    const isEdit = ref(false);

    const updateSelectedDay = (newSelectedDay) => {
      selectedDay.value = newSelectedDay;
    };

    const editDeal = () => {
      isEdit.value = true;
    };

    const saveDeal = (deal) => {
      diaryData.value = diaryData.value.map((item) => {
        const editedWorks = item.works.map((work) => {
          if (work.id === deal.id) {
            return deal;
          }
          return work;
        });
        return {
          ...item,
          works: editedWorks,
        };
      });

      isEdit.value = false;
    };

    const addDeal = (deal) => {
      const findedDay = diaryData.value.find(
        (post) => convertDate(post.date) === convertDate(new Date(selectedDay.value).getTime())
      );

      if (findedDay) {
        diaryData.value = diaryData.value.map((post) => {
          if (convertDate(post.date) === convertDate(new Date(selectedDay.value).getTime())) {
            post.works.push({ ...deal, id: idGenerator.value + 50 });
          }
          return post;
        });
      } else {
        diaryData.value.push({
          date: new Date(selectedDay.value).getTime(),
          works: [{ ...deal, id: idGenerator.value + 50 }],
        });
      }
    };

    const removeDeal = (deal) => {
      diaryData.value = diaryData.value
        .map((post) => {
          const works = post.works.filter((item) => item.id !== deal.id);
          return {
            ...post,
            works,
          };
        })
        .filter((post) => !!post.works.length);
    };

    return {
      diaryData,
      selectedDay,
      isEdit,
      updateSelectedDay,
      editDeal,
      removeDeal,
      saveDeal,
      addDeal,
    };
  },
});
</script>

<style lang="scss">
$purple: #9575cd;
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
  background: $purple;
}

.is-selected {
  color: $purple;
}

.planned {
  background: $purple;
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
  margin: 10px 45px;
  padding: 10px;
  border-radius: 4px;
  width: 290px;
}

.addButton {
  margin-top: 10px;
}
</style>
