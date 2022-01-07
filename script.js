/*jslint browser: true, indent: 3 */

// CS 3312, spring 2019
// Studio 9
// YOUR NAMES: Josh Meek and Chad Fry

// All the code below will be run once the page content finishes loading.





document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // this seems to actually work! for whatever reason the console.log variant was unreliable...

   var titlePieces = document.querySelectorAll('.title');
   var timer = 400;

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

   //OK, so the title has been loaded by now... so why not wait a sec, then pop-in the rest? :D
   window.setTimeout(function () {
      document.querySelector('.about_section').style.display = '';
   }, 2000);

}, false);
