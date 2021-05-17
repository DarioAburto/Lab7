// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here



const setState = router.setState;

window.addEventListener('popstate', (event) => {
  console.log("location:" + document.location + ", state:" + JSON.stringify(event.state));
  router.setState(event.state);
  window.location = document.location;
});

if('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(registration){
      console.log('ServiceWorker registration successful with scope:' , registration.scope);
    } , function(err){
      console.log('ServiceWorker registration failed:' , err);
    });
  });
}


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

/*
window.onpopstate = function(event){
  router.setState(event.state);
}
*/
// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.addEventListener("click", function(){
          let entryPage = document.querySelector("entry-page");
          if(entryPage.entry.title){
            document.querySelector("body").removeChild(entryPage);
            entryPage = document.createElement("entry-page");
            document.querySelector("body").appendChild(entryPage);
          }
          router.setState(entry.title);
          //document.querySelector("body").className = "single-entry";
          entryPage.entry = newPost.entry;
        });
        document.querySelector('main').appendChild(newPost);
      });
    });
});
