import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    // console.log('context', context);
    // mutations을 위한 context
    fetchNewsList()
      .then(({ data }) => {
        console.log(data);
        commit('SET_NEWS', data); //action에서 MUTATION으로 넘길 때 commit, response.data도 넘긴다.
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);
        commit('SET_JOBS', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        console.log(data);
        commit('SET_ASK', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit('SET_USER', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, item) {
    fetchItemInfo(item)
      .then(({ data }) => {
        console.log(data);
        commit('SET_ITEM', data);
      })
      .catch((error) => console.log(error));
  },
};
