import { getAddrList } from "@/api/address";

const state = {
  addrList: []
};
const mutations = {
  getAddrList(state, payload) {
    state.addrList = payload;
  },
};
const actions = {
  async getAddrList({ commit }) {
    const res = await getAddrList();
    commit("getAddrList", res?.data?.addresses || []);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
