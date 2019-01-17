var Vue = require('vue/dist/vue.js');
var Swiper = require('swiper');
var $ = require('jquery');
const faker = require('faker');

//todo: move to custom.
let toggler = require('./cssToggler');

$(function() {
    var randomName = faker.name.findName();
    buttonDemo();
    
    Vue.component('blog-post', {
        props: ['title'],
        data: function () {
            return {
                count: 0,
                isActive: true,
                message: "hello i am gillian"
            }
        },
        template: '<button v-bind:class="{ active: isActive }" v-on:click="isActive=!isActive" >{{message }} {{ count }} {{ title }}</button>'
    });
 //   new Vue({ el: '#components-demo' });
 
});

function buttonDemo() {
    
    Vue.component('gt-button', {
    
        props: {
            label: String,
            link: String,
            scheme: String,
            styleModifier: String,
            isActive: Boolean
        }
        data: function() {
            return {
                count: 0,
                isActive: true,
                isDisabled: false,
                message: "hello i am gillian"
            }
        },
        template: `<div v-on:click="isActive = !isActive" v-bind:class="{ active: isActive, 'disabled': isDisabled }" class="g-Button">
                    <a class="g-Button__link" v-bind:href="link" >{{ label }}</a>
                    </div>`
    });
    
    new Vue({el: '#button-demo'});
    
}
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
    return init();
};