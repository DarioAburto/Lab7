// router.js
export const router = {};

document.querySelector("img").addEventListener("click", function(){
  router.setState("settings");
});

document.querySelector("h1").addEventListener("click", function(){
  router.setState("home");
});



/**
 * Changes the "page" (state) that your SPA app is currently set to
*/
router.setState = function(state) {
  /**
   * - There are three states that your SPA app will have
   *    1. The home page
   *    2. The entry page (showing one individual entry)
   *    3. The settings page (currently blank, no actual settings here, just a placeholder where a real settings page would go)
   * 
   * - If you look at the CSS, we have 2 classes you can add to the body element to help change states, "settings" and "single-entry"
   * - Changing states will require more than just changing these classes, for example the settings page requires you to change the title to "Settings"
   * - And each individual entry the title changes to "Entry #" based on it's number in the entry order
   *
   * - When changing states, make sure the back and forward buttons work. You can use hash URLs (e.g. https://someurl.com/#settings) when changing states
   *   to make things easier.
   * - Similarly, when viewing an individual entry, a hashed URL might look like https://someurl.com/#entry3
   * 
   * - Some tips:
   *    1. Push a new state object to the history object using history.pushState() 
   *    2. look up the documentation for how to use pushState() when you try it
   *    3. look up the documentation for the "popstate" event listener (fires only on back button), useful in your script.js file
   *    4. For each <journal-entry> element, you can grab the JSON version of its info with .entry (e.g. someJournalEntryElement.entry)
   *       a. This is useful when viewing a single entry. You may notice an <entry-page> element in the HTML, this is the element that is displayed when the
   *          .single-entry class is applied to the body. You can populate this element by using .entry similarly. So if I wanted to grab a specific <journal-entry>
   *          and populate it's info into the <entry-page>, I would simply use an assignment of entryPageElement.entry = journalEntryElement.entry
   *       b. Clearing the <entry-page> element of its previous data can be a bit tricky, it might be useful to just delete it and insert a new blank one 
   *          in the same spot each time. Just a thought.
   *
   * - Answers to some questions you may have:
   *    1. You may add as many helper functions in this file as you like
   *    2. You may modify the parameters of setState() as much as you like
   */

    
    if(state == "settings"){
      history.pushState({page: "settings"}, "settings", "http://127.0.0.1:5500/#settings");
      document.querySelector("body").className = "settings";
      document.querySelector("h1").innerHTML = "Settings";
    }
    if(state == "home"){
      history.pushState({page: "home"}, "home", "http://127.0.0.1:5500/");
      document.querySelector("body").className = "";
      document.querySelector("h1").innerHTML = "Journal Entries";
    }
    if(state == "You like jazz?"){
      history.pushState({page: "entry1"}, "entry1", "http://127.0.0.1:5500/#entry1");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 1";
      //let entryPage  = document.querySelector("entry-page");
      //let journalEntry = document.getElement(state);      
      //entryPage.entry = journalEntry.entry;
      //document.querySelector("body").appendChild(entryPage);
    }
    if(state == "Run, Forrest! Run!"){
      history.pushState({page: "entry2"}, "entry2", "http://127.0.0.1:5500/#entry2");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 2";
    }
    if( state == "Ogres are like onions"){
      history.pushState({page: "entry3"}, "entry3", "http://127.0.0.1:5500/#entry3");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 3";
    }
    if( state == "You're a wizard, Harry"){
      history.pushState({page: "entry4"}, "entry4", "http://127.0.0.1:5500/#entry4");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 4";
    }
    if ( state == "We know each other! He’s a friend from work!"){
      history.pushState({page: "entry5"}, "entry5", "http://127.0.0.1:5500/#entry5");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 5";
    }
    if ( state == "I am... Iron Man" ){
      history.pushState({page: "entry6"}, "entry6", "http://127.0.0.1:5500/#entry6");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 6";
    }
    if ( state == "Just keep swimming"){
      history.pushState({page: "entry7"}, "entry7", "http://127.0.0.1:5500/#entry7");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 7";
    }
    if(state == "No capes!"){
      history.pushState({page: "entry8"}, "entry8", "http://127.0.0.1:5500/#entry8");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 8";
    }
    if ( state == "Keep moving forward"){
      history.pushState({page: "entry9"}, "entry9", "http://127.0.0.1:5500/#entry9");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 9";
    }
    if( state == "No, I am your father"){
      history.pushState({page: "entry10"}, "entry1", "http://127.0.0.1:5500/#entry10");
      document.querySelector("body").className = "single-entry";
      document.querySelector("h1").innerHTML = "Entry 10";
    }
        

}
/*
function getEntry(entry){

  let journalEntry = entry;
  let entryPage = document.querySelector('entry-page');

  entryPage.entry = journalEntry.entry;
  history.pushState({page: "entry"}, "entry", "http://127.0.0.1:5500/");
  document.querySelector("body").className = "single-entry"

}
*/
