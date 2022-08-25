# hash로 페이지 위치 이동하기

- 브라우저의 기본 동작으로 들어가 있는 기능
```html
<a href="#title1">제목1</a>
<a href="#title2">제목2</a>
<a href="#title3">제목3</a>
<a href="#title4">제목4</a>

<section>
  <h1 id="#title1">제목1</h1>
</section>
<section>
  <h1 id="title2">제목2</h1>
</section>
<section>
  <h1 id="title3">제목3</h1>
</section>
<section>
  <h1 id="title4">제목4</h1>
</section>
```


# scroll behavior

```js
scrollBehavior : () => ({top : 0})
```

# pinia 상태관리 패턴 라이브러리