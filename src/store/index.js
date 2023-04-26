import { createStore } from 'vuex';
import ApiService from '../services/index';

export const store = createStore({
  state() {
    return {
      empty: false, // пустой ли запрос
      users: [], // весь список юзеров
      find: [], // список найденых юзеров
      selectID: undefined, // ID выбранного элемента
      select: false, // отображение свойств
      isLoad: true, // отображение прелоадера
      error: false, // обработка ошибок
    };
  },
  mutations: {
    // сборка результатов поиска
    setFindUser(state, findText) {
      state.isLoad = false;
      // имитируем задержку
      setTimeout(() => {
        state.find = [];
        state.selectID = undefined;
        state.select = false;
        if (findText.indexOf(',') > -1) {
          findText = findText.split(',');
          findText.forEach((el, index) => {
            findText[index] = el.trim();
          });
        } else findText = [findText.trim()];
        for (let i = 0; i < findText.length; i++) {
          state.users.forEach((el) => {
            if (
              findText[i] != '' &&
              (el.name.toLowerCase().indexOf(findText[i].toLowerCase()) > -1 || String(el.id) === findText[i])
            ) {
              el.selected = false;
              state.find.push(el);
            }
          });
        }

        if (state.find.length === 0 && findText != '') state.empty = true;
        else state.empty = false;

        state.isLoad = true;
      }, 1000);
    },
    // обновление базы юзеров
    updateUsers(state, data) {
      state.users = data;
    },
    // обработка ошибка
    setError(state) {
      state.error = true;
    },
    // обработка выделения
    selectUser(state, id) {
      state.users.forEach((el, index) => {
        if (el.id == id) state.selectID = index;
      });
      state.find.forEach((el, index) => {
        if (el.id == id) state.find[index].selected = true;
        else state.find[index].selected = false;
      });
      state.select = true;
    },
  },
  actions: {
    // поиск юзера
    findUser({ commit }, findText) {
      commit('setFindUser', findText);
    },
    // выбор юзера
    selectUser({ commit }, id) {
      commit('selectUser', id);
    },
    // запрос всех юзеров с API
    async getAllUsers({ commit }) {
      try {
        const response = await ApiService.getAllUsers();
        commit('updateUsers', response);
      } catch (error) {
        commit('setError');
        console.log(error);
      }
    },
  },
  getters: {
    // геттеры для удобства
    allUsers(state) {
      return state.users;
    },
    isSelect(state) {
      return state.select;
    },
    findCount(state) {
      return state.find.length;
    },
    findUsers(state) {
      return state.find;
    },
    noFound(state) {
      return state.empty;
    },
    getSelectID(state) {
      return state.selectID;
    },
    isLoad(state) {
      return state.isLoad;
    },
    isError(state) {
      return state.error;
    },
  },
});
