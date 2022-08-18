import {createRouter, createWebHistory} from 'vue-router'
// createWebHistory
// createWebHashHistroy

import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie.vue'
import Movies from './Movies.vue'

export default createRouter({
    history : createWebHistory(), // hash mode, history mode ( html5 mode )
    routes : [
        {
            path :'/',
            component : Home
        },
        {
            path : '/about',
            component : About
        },
        {
            path : '/movies/:abc',
            component : Movie
        }, 
        {
            path : '/movies',
            component : Movies
        }
    ]
})
