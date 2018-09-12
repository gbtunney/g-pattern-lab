
const number = 42;

var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
var Swiper = require('swiper');

var $ = require('jquery');




//var v = require('fitvids');


let printer = require('./printer');

let toggler = require('./cssToggler');

//global.printer = printer;
$(function() {
    let mySwiper = new Swiper('.swiper-container', { /* ... */ });
    //console.log("ready"+printer.print() );
    
    toggler.init();
   // printer.print();
    // Handler for .ready() called.
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