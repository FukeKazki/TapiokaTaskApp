import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [
      {
        id: 1,
        name: 'ハッカソン',
        dedLine: new Date(2019, 5, 22),
        difficulty: 2,
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
          dedLine: new Date(2019, 5, 24),
          difficulty: 3,
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
          dedLine: new Date(2019, 5, 30),
          difficulty: 3,
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
                dedLine: obj.dedLine,
                difficulty: obj.difficulty,
                usingTime: obj.usingTime,
                times: obj.times,
                place: obj.place,
                feeling: obj.feeling,
            },
        ];
    },
  },
  actions: {

  }
})
