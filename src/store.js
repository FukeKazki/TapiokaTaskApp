import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      now: '',
      place: '',
      feeling: '',
      freeTime: '',
    task: [
      {
        id: 1,
        name: 'ハッカソン',
        dedLine: new Date(2019, 5, 22),
        difficulty: 2,
        usingTime: 120,
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
          usingTime: 40,
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
          usingTime: 90,
          times: [
              {start: '9:30', end: '11:30'},
              {start: '22:30', end: '23:00'},
          ],
          place: ['北九州高専'],
          feeling: 'Bad',
      },
        {
            id: 4,
            name: '代数幾何の宿題',
            dedLine: new Date(2019, 5, 25),
            difficulty: 1,
            usingTime: 20,
            times: [],
            place: [],
            feeling: 'Bad',
        },
        {
            id: 5,
            name: '高専祭準備',
            dedLine: new Date(2019, 11, 20),
            difficulty: 1,
            usingTime: 90,
            times: [],
            place: ['北九州高専'],
            feeling: 'Good',
        },
        {
            id: 6,
            name: 'TypeScriptの勉強',
            dedLine: new Date(2019, 6, 1),
            difficulty: 0,
            usingTime: 10,
            times: [],
            place: [],
            feeling: 'Good',
        },
        {
            id: 7,
            name: 'パワポの作成',
            dedLine: new Date(2019, 5, 23),
            difficulty: 0,
            usingTime: 70,
            times: [],
            place: [],
            feeling: 'Good',
        },
        {
            id: 8,
            name: 'Cコンパイラの作成',
            dedLine: new Date(2019, 11, 30),
            difficulty: 0,
            usingTime: 120,
            times: [],
            place: [],
            feeling: 'Good',
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
      nowFeeling (state, obj) {
        state.now = new Date();
        state.place = obj.place;
        state.feeling = obj.feeling;
        state.freeTime = obj.freeTime;
    },
      // deleteTask (state, obj) {
      //
      // },
  },
  actions: {

  }
})
