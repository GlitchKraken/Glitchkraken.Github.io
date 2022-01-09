/*jslint browser: true, indent: 3 */

// CS 3312, spring 2019
// Studio 9
// YOUR NAMES: Josh Meek and Chad Fry

// All the code below will be run once the page content finishes loading.

var motdArray =  ['~ No Place Like 127.0.0.1 ~', 'A place with all your hacking needs!', 
'Have you tried turning it off and back on again?', 'MJQXGZJWGQQGS4ZAONXSA33WMVZHEYLUMVSA====', 
'Mess with the best and die like the rest~', 'jhlzhy jpwolyz hyl h ipa avv lhzf, lo?',
'Eznwxz xwqxaxa itv y ihv wh wsc! Vzgrkgx amtrj y ahb ekkf iamu vfm~', 'Bjne ratvnh ttq byau!', 
'Stay awhile and listen...', 'So many targets, so little time. ', 
'The right man in the wrong place can make all the difference in the world.', 
'-Our crime is that of curiosity-', 'Hack the planet!', 
'Information is power!', 'Everything can be hacked... and everyone~', 'A super secret hacking log on a super secret hacking blog!',
'We do what we must, because we can.', 
'Where\'s the fun in playing fair?']


// set a cookie that records the user's preference of scanlines... or the lack thereof.



// basically, do everything ONCE in a function that is run when the page is loaded. no need for repeat shenanigans...
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   
   // alert(document.cookie)
   if (document.cookie === null) {
      document.cookie ='scanlinePreference=none;secure'; 
      alert('created cookie!');
   }



   var userPreferenceCookie = document.cookie;

   // add this to test!
   // another comment so the second cast is picked up. ugh, thanks git.
   var userPreference = String(String(userPreferenceCookie).split('=')[1]).split(';')[0];
   if (userPreference === 'OFF')
   {
      var PageOverlayClasses = document.getElementById('pageDiv').classList;
      if (PageOverlayClasses.contains('scanlines')) {
         PageOverlayClasses.remove('scanlines');
      }
   }
   

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


   var path = window.location.pathname;
   var pagename = path.split("/").pop();
   if (pagename === "index.html") {
      document.querySelector('.motd').textContent = motdArray[(Math.floor(Math.random() * motdArray.length))];
   }
   

}, false);
