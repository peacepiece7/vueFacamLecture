### 1.

- v-bind 혹은 :로 바인딩 할 수 있음

```vue
<template>
  <h1 :style="style" @click="reverseMsg">{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, world!",
      style: "color : red; font-size : 100px; border : 4px solid;",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    reverseMsg: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style></style>
```

## 2. 
.eslintrc.json 규칙 적용하기

settings.json에 아래 두 줄 추가!
```json
{
  // eslintrc.json을 인식
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // eslint가 아래 토글에 표시됨
  "eslint.alwaysShowStatus": true,
}
```


# 3. 

v-on => @
v-bind => :

# 4. computed & watch

- 데이터를 가져와서 사용

getter & setter
```vue
<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <h2>{{ double }}</h2>
</template>

<script>
export default {
  data() {
    return {
      count : 1
    }
  },
  // Getter, 함수지만 데이터로 사용가능함. getter는 함수를 일반 변수처럼 사용가능 (원래는 double()인데 double만 쓰면 됨) 아래는 getter임
  // computed는 캐싱됨 (함수는 같은 로직을 여러번 반복)
  computed : {
  // double(){
  //   return this.count * 2
  // }
  double : {
    get(){
     //  console.log('Getter')
      return this.count * 2
    },
    set(value){
      console.log('Setter')
      this.count = value / 2
    }
  }
  },
  // useEffect같음 변수를 감시함
  watch : {
    count(newValue, oldValue) {
      console.log('count prev : ', oldValue, 'count current :', newValue)
    },
    double(newValue, oldValue)
    {
      console.log('double prev : ', oldValue, 'double current :', newValue)
    }
  },
  methods: {
    increase(){
      this.count++
      //console.log(this.double)
      // this.double = 7
    }

  }

}
</script>

<style>
h1 {
  font-size : 100px;
}
</style>

```

# 5. class syntax sugar

```vue
<template>
  <!-- <h1 :class="isRed ? 'isRed' : ''">
    Hello, world!
  </h1> -->

  <!-- value기 true일 경우 key를 출력 -->

  <!-- class, style만 객체(배열)를 데이터로 바인드가 가능함 -->
  <h1
    :class="{ 'is-red' : isRed, abc : true, xyz : false}"
    :style="{
      backgroundColor : 'orange',
      fontSize : '20px',
    }">
    Hello, world!
  </h1>
  <h2>hh</h2>
  <button @click="isRed = !isRed">
    toggle
  </button>
</template>

<script>
export default {
  data() {
    return {
      isRed : false
    }
  },
  methods: {
  }
}
</script>

<style>
h1.is-red {
  color : red;
  font-size : 100px;
}
</style>

```