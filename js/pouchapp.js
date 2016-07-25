 (function() {

  'use strict';

  var ENTER_KEY = 13;
  
   
  
  var db = new PouchDB('minifb');
var remoteCouch = false;

  // Adding Facebook returned user profile to the database
  function saveProfile(profile) {
  }

   
   

   function showUserProfile() {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
    redrawTodosUI(doc.rows);
  });
}

 }
)();