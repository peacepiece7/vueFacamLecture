import {createRouter, createWebHistory} from 'vue-router'
// createWebHistory
// 응답을 두 번함 (서버에 세팅이 필요함, nginx, nodejs etc..)

// createWebHashHistroy
// 한 번에 모든 요청을 받아서 해쉬로 처리함
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach <a id="#설명"/>
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#설명 

import Home from './Home.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import AboutAge from './AboutAge.vue'
import Movie from './Movie.vue'
import Movies from './Movies.vue'
import NotFound from './NotFound.vue'

export default createRouter({
    scrollBehavior : () => ({top : 0}),
    history : createWebHistory(), // hash mode, history mode ( html5 mode )
    routes : [
        {
            path :'/',
            component : Home
        },
        {
            path : '/about',
            component : About,
            children : [
                {
                    // /name => naver.com/name
                    // name => naver.com/about/name
                    path : 'name',
                    component : AboutName
                },
                {
                    path : 'age',
                    component : AboutAge
                }
            ]
        },
        {
            path : '/movies',
            component : Movies
        },
        {
            path : '/movies/:id',
            name : 'MovieDetails',
            component : Movie
        }, 
        // 404는 제일 마지막 () <= regex 소괄호를 열어서 작성 md에서 연습 가능
        {
            path : '/:notfound(.*)',
            component : NotFound
        }
    ]
})
