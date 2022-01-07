/*jslint browser: true, indent: 3 */

// CS 3312, spring 2019
// Studio 9
// YOUR NAMES: Josh Meek and Chad Fry

// All the code below will be run once the page content finishes loading.

document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   (function () {

      function PlayRetroAudio() {
         var audio = new Audio('/sounds/retroHit.m4a');
         audio.volume = 0.4;
         audio.play();
     }
     
     
   
    var links = document.querySelectorAll('.link');
     
     links.forEach(element => {
        element.addEventListener('click', PlayRetroAudio());
     });













   }());
 
}, false);
