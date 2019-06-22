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
        usingTime: 200,
        times: [
            {start: '9:30', end: '11:30'},
            {start: '22:30', end: '23:00'},
        ],
        place: ['福岡'],
        feeling: 'Good',
      },
      {
          id: 2,
          name: 'レポート',
          end: new Date(2019, 5, 24),
          difficulty: 1,
          usingTime: 400,
          times: [
              {start: '9:30', end: '11:30'},
              {start: '22:30', end: '23:00'},
          ],
          place: ['北九州高専'],
          feeling: 'Bad',
      },
      {
          id: 3,
          name: 'テスト',
          end: new Date(2019, 5, 30),
          difficulty: 1,
          usingTime: 900,
          times: [
              {start: '9:30', end: '11:30'},
              {start: '22:30', end: '23:00'},
          ],
          place: ['北九州高専'],
          feeling: 'Bad',
      },
    ],
  },
  mutations: {
    addTask (state, obj) {
        state.task = [
            ...state.task,
            {
                id: state.task.length + 1,
                name: obj.name,
                end: obj.end,
                difficulty: obj.difficulty,
                conditions: obj.conditions,
            },
        ];
    },
  },
  actions: {

  }
})
