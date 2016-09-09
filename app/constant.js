(function() {
  'use strict';

  var port = 8080;
  var localhost = "http://localhost:";

  angular.module('clientApp')
    .constant("API", {
      "ANIMES": localhost + port + "/animes/",
      "EPISODES": localhost + port + "/episode/",
      "USERS": localhost + port + "/users/",
      "AUTHENTICATE": localhost + port + "/authenticate/",
    });
})();