# 2 week leacture

## if

- 형제 요소만 경우만 가능!
- v-if, v-else-if, v-else, v-for, (element)
- 랜더링을 다시 함

```js
<template>
  <div class="container">
    <template v-if="message">
      <h1>hello, world!</h1>
    </template>
    <!--  -->
    <!--  -->
    <div class="test">test</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
      }
    },
  }
</script>

<style></style>
```

### v-show

- false시 disaply : none, css속성을 조정

## map, key(id)

- key 값은 고유해야 반응성을 유지 할 수 있음

```js
<div v-for="n if arr" :key="n.id">
```

## v-for , v-if를 같이 쓰지 말 것! ( v-for )

```js
<template>
  <ul>
    <template
      v-for="movie in movies"
      :key="movie.imdbID">
      <li>
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          width="100" />
      </li>
      <li>
        {{ movie.Title }}
      </li>
    </template>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        movies : []
      }
  },
  async created() {
    const res = await this.getMovies()
    this.movies = res
  },
  methods : {
    async getMovies(){
    const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    const { Search } = await res.json()
    return Search
    // this.movies
    }
  }
}
</script>

<style></style>

```


## 함수 호출 (event handling)


## default event 

```js
// 관련 코드가 동일한 순서로 생성되므로 수식어를 사용할 때 순서를 지정하세요. 
// 다시말해 `v-on:click.prevent.self`를 사용하면 **모든 클릭**을 막을 수 있으며 
// `v-on:click.self.prevent`는 엘리먼트 자체에 대한 클릭만 방지합니다.
document.querySelector("blah").addEventLitener("click", (e) => {
  e.preventDefault();
  e.stopPapagation();
} {
  capture : true,
  passive : true
})
// `.passive`와 `.prevent`를 함께 사용하지 마세요.`.prevent`는 무시되고 브라우저는 오류를 발생시킬 것입니다. 
//`.passive`는 당신이 이벤트의 기본 행동을 무시하지 _않기를 원하는_ 브라우저와 상호작용한다는 사실을 기억하세요.
```

## target, currentTarget

- target 현재 클릭된 타겟
- currentTarget 이벤트가 걸려있는 타겟
```js
e.target
e.currentTarget
```

- @click.self이란
  - e.current == e.currentTarget일 경우 발생



## passive 

- 로직과 화면의 움직임을 분리
- 쓰로틀링이랑 다른듯

## keydown 

- key 수식어 이벤트

```js
  // enter 시 동작
  <input @keydown.enter="handler" />
  // a 클릭 시 시작
  <input @keydown.a="handler" />
```

## 양방향 데이터 바인딩 (feat. v-model)

```js
<template>
  <!-- <input
    :value="message" 
    @input="message = $event.target.value" /> -->
  <input v-model="message" />
  <h1>{{ message }}</h1>
</template>
```




```js
  <!-- <input
    :value="message" 
    @input="message = $event.target.value" /> -->
  <!-- <textarea
    v-model="message"></textarea>
  <h1 style="white-space: pre-line">
    {{ message }}
  </h1> --> 
  <select v-model="message">
    <option value="">
      선택하세요
    </option>
    <option value="apple">
      사과
    </option>
    <option value="banana">
      바나나
    </option>
    <option value="cherry">
      체리
    </option>
  </select>
  <h1 style="white-space: pre-line">
    {{ message }}
  </h1>



// 안돌아감

  <input
    v-model.lazy="message"
    type="text" />
  <h1 style="white-space: pre-line">
    {{ message }}
  </h1>
```


## mutation 

- props로 내려오는 값은 읽기 권한만 있음



## props drilling

- emit, props 참고


## store 

- vuex (v.4)
- pinia

## slot

- react의 props.children역할.
- props를 물려주는 건 아니고. `<slot>`을 사용함