# タスク管理アプリ
タピオカUIでタスク管理
## 機能
- **タスクの追加**
- **タスクの削除**
- **タスクのソート**
    - タスクの期限
    - タスクの難易度
    - ソート結果の上位三件を表示
    - ソート結果が気に入らなかったら更新ボタンで次の三件を表示
- **タスクのUIの変更**
    - タスクの期限が迫ってきたら色の変更
    - タスクの量が多くなってきたら背景色の変更
    
## 画面
- **トップページ**
    - タスクをタピオカUIで表示
- **タスクのソート画面**
    - ソートボタンやソート結果を表示
- **タスクの追加画面**
    - フォームからタスクの追加ができる
    
## 状態管理
- **Vuex**
```javascript
task: [
    {
        id: 1,
        name: 'タスクの名前',
        end: 'タスクの期限',
        difficulty: '難易度(数値型)',
        conditions: ['場所', '天候'],
    },
]
```
    
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
