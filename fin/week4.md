# lifecycle

- beforeCreate
    - data() 리턴 전 (컴포넌트가 생성되기 전)
    - 할 수 있는게 딱히 없음
- created
    - 컴포넌트가 생성된 후 
- beforeMount
    - 마운트 전, 이거 쓸거면 created쓰면 됨
- mounted
    - 마운트 된 후
- etc ...

- created에서 처리할 수 없으면 mounted로 옮기면 됨

```js
// 아래와 같이 콘솔로 찍어서 확인 가능
export default {
  data() {
    return {
      message : 'Hello?!'
    }
  },
  beforeCreate() {
    console.log(`before Created : ${this.message}`)
  },
  created() {
    console.log(`created : ${this.message}`)
    console.log(document.querySelector('h1'))
  },
  beforeMount() {
    console.log(`beforeMount : ${this.message}`)
    console.log(document.querySelector('h1'))
  }, 
  mounted(){
    console.log(`mounted : ${this.message}`)
    console.log(document.querySelector('h1'))
    console.log("---------------------------")
  },
  beforeUpdate() {
    console.log(`beforeUpdate : ${this.message}`)
  }
  updated () {
    console.log(`updated : ${this.message}`)
  }
}
```

## update lifecycle

- 화면이 변경되기 전, 후
- beforeUpdate, updated
- 쓸일이 거의 없음.. 무한 루프