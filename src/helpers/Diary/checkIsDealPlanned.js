import { convertDate } from '@/helpers/Diary/convertDate';

export const checkIsDealsPlanned = (diaryData, currentDay) => {
  return diaryData.find((item) => {
    return convertDate(item.date) === convertDate(currentDay);
  });
};
