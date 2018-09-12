
const number = 42;

var unique = require('uniq');

var Vue = require('vue/dist/vue.js');




var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];



var Swiper = require('swiper');
var $ = require('jquery');

//todo: move to custom.
let toggler = require('./cssToggler');

$(function() {
    let mySwiper = new Swiper('.swiper-container', { /* ... */ });
    
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.id }}{{ todo.text }}</li>'
    })
    
    Vue.component('g-Button', {
        props: ['button'],
        template: '<h2>Hi</h2>'
    })
    
    
    var app7 = new Vue({
        el: '.g-Button-Group',
        data: {
            buttonList: [
                { id: 0,link:'http://google.com', label: 'Vegetables' },
                { id: 1,link:'http://yahoo.com',  label: 'Cheese' },
                { id: 1,link:'http://bing.com',  label: 'Cheese' }
            ]
        }
    })
    
       var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    });
    console.log(app5);
    
    /*
    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    })*/
   // toggler.init();
   
});


function init() {
    console.log("hellow");
    if (cache.$hero.length) {
        
        var hero;
        
        hero = new Swiper(cache.$hero, {
            autoplay: 2000,
            direction: 'horizontal',
            loop: true,
            speed: 700,
            grabCursor: true
        });
        
        console.info(hero);
        
    }
    
}

module.exports = function() {
    console.log("swiper init" + $);
    
    return init();
    
};