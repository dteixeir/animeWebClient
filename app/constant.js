(function() {
  'use strict';

  var port = 8080;
  var rootUrl = "https://anime-server.herokuapp.com/";

  angular.module('clientApp')
    .constant("API", {
      "ANIMES": rootUrl + "animes/",
      "EPISODES": rootUrl + "episode/",
      "USERS": rootUrl + "users/",
      "AUTHENTICATE": rootUrl + "authenticate/",
    });
})();