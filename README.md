# タスク管理アプリ
タピオカUIでタスク管理<br>
> URL: https://fukekazki.github.io/TapiokaTaskApp/  
> プレゼンスライド: https://www.icloud.com/keynote/0APB-uMarf3PUkmwhQWS5GCRQ#TaskAdviser
## 機能
- **タスクの追加**   
    form画面からタスクの追加ができる.    
    以下入力する内容  
        - タスク名      例) レポート  
        - タスクの締切期限  (2019/6/25)  
        - 必要な時間     (90分)  
        - 実行できる時間帯  (開始: 11:00, 終了: 12:00)  
        - 実行できる場所   例) 北九州高専  
        - このタスクの印象  (Good or Bad)
        
- **タスクの確認1**  
    TaskTable画面から実行中のタスクの確認ができる 
    
- **タスクの確認2**  
    Home画面から登録中のタスクが**タピオカ**の見た目で表示される 
      
- **タスクの削除**  
    TaskTable画面から実行中のタスクの削除ができる
    
- **タスクのソーティング**  
    現在の自分の状態, タスクの実行に必要な時間, 実行できる場所などを考慮しておすすめのタスクを紹介します 
    
- **Home画面の見た目の変更**  
    タスクの量が多くなってきたら背景色が変更され視覚的にタスクが溜まっていることが分かる  
    
- **SPAで使用感の向上**    
    Vue.jsを用いたSPAとVue Routerを用いたシームレスな画面遷移によりユーザー体験の向上を図った
        
- **アニメーションを用いたかわいいUI**  
    cssアニメーションやアイコンを用いて可愛らしい見た目にした  
    
- **レスポンシブ対応**

## メモ
- **Vuex**  
タスクは src/store.js の state に持たせる.

- **Vue Router**  
画面遷移は src/router.js の routes が持つ.

- **コンポーネント**    
複数回使用するコンポーネントは src/components/ に入れる.

- **画面**  
画面は src/views/ に入れる.  
ここからコンポーネントを呼び出したりする.  

- **画像等**  
src/assets に追加する.  
    
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
