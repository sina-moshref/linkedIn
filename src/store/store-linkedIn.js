const state = {
  userData: {
    userName: "John Doe",
    profession: "Front-end developer",
    userConnections: 49,
    userVisitedProfiles: 12,
  },
  postsData: {
    username: "Sara Aniston",
    profession: "UI designer",
    uploadTime: "2 week",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum
    alias, placeat maiores temporibus quisquam fuga sed, totam repudiandae
    animi odio natus? Totam sed sit magni omnis, veniam fugiat libero
    voluptatum culpa ipsa.`,
    likes: 122,
    comments: 49,
    share: 2,
  },
};

const mutations = {};

const action = {};

const getters = {
  userData: (state) => {
    return state.userData;
  },
  postsData: (state) => {
    return state.postsData;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  action,
  getters,
};
