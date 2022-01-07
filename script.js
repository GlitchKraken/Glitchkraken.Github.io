/*jslint browser: true, indent: 3 */

// CS 3312, spring 2019
// Studio 9
// YOUR NAMES: Josh Meek and Chad Fry

// All the code below will be run once the page content finishes loading.





document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // this seems to actually work! for whatever reason the console.log variant was unreliable...

   var titlePieces = document.querySelectorAll('.title');
   var timer = 500;
   titlePieces.forEach((line) => {
      
      /*
      line.addEventListener('click', () => {
         alert('for each worked! :D')
      });
      */
     timer += 100;
      window.setTimeout(function () {
        
         line.style.display = "";
      },timer);

   });

   function timer() {
      //alert("timer!");
   }
   
   window.setInterval(timer, 1000);

}, false);
