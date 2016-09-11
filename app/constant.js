(function() {
  'use strict';

  var port = 8080;
  var rootUrl = "https://anime-server.herokuapp.com/";

  angular.module('clientApp')
    .constant("API", {
      "ANIMES": rootUrl + port + "/animes/",
      "EPISODES": rootUrl + port + "/episode/",
      "USERS": rootUrl + port + "/users/",
      "AUTHENTICATE": rootUrl + port + "/authenticate/",
    });
})();