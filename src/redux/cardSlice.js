// cardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedCards: [], // Массив для хранения выбранных карточек
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const { card } = action.payload; // Получаем целый объект карточки из action.payload
      const index = state.likedCards.findIndex((item) => item.id === card.id); // Проверяем, есть ли карточка в массиве по id
      if (index !== -1) {
        state.likedCards.splice(index, 1); // Удаляем карточку из массива, если она уже там была
      } else {
        state.likedCards.push(card); // Добавляем карточку в массив, если ее там не было
      }
    },
  },
});

export const { toggleLike } = cardSlice.actions;

export default cardSlice.reducer;
