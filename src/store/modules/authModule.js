import axios from 'axios';

const state = {
  token: '',
  animeContent: null,
};

const getters = {
  getToken: state => state.token,
  getAnimeContent: state => state.animeContent,
};

const actions = {
  async generateToken({ commit }) {
    try {
      const response = await axios.post('https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken', {
        email: 'adityakaran26@gmail.com',
      });
      commit('setToken', response.data.token);
    } catch (error) {
      console.error('Error generating token:', error);
    }
  },
  // async fetchAnimeContent({ commit, state }) {
  //   try {
  //     const response = await axios.get('https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent', {
  //       headers: {
  //         Authorization: `Bearer ${state.token}`,
  //       },
  //     });
  //     commit('setAnimeContent', response.data.content);
  //   } catch (error) {
  //     console.error('Error fetching anime content:', error);
  //   }
  // },
  async fetchAnimeContent({ commit, state }, id = '') {
    try {
      const url = id ? `https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent/${id}` : `https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      commit('setAnimeContent', response.data.content);
    } catch (error) {
      console.error('Error fetching anime content:', error);
    }
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  setAnimeContent: (state, content) => (state.animeContent = content),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
