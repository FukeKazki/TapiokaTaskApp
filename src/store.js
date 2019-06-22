import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [
      {
        id: 1,
        name: 'ハッカソン',
        end: new Date(2019, 5, 22),
        difficulty: 1,
        conditions: ['福岡'],
      },
      {
        id: 2,
        name: 'レポート',
        end: new Date(2019, 5, 25),
        difficulty: 2,
        conditions: ['北九州高専', '嫌い'],
      },
      {
        id: 3,
        name: 'テスト勉強',
        end: new Date(2019, 6, 30),
        difficulty: 3,
        conditions: ['北九州高専', 'やりたくない', '時間かかる']
      },
    ],
  },
  mutations: {

  },
  actions: {

  }
})
