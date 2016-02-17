(function () {
  'use strict';

  // create the angular app
  angular.module('procalizeApp', [
    'procalizeApp.controllers',
    'procalizeApp.directives'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('procalizeApp.controllers', []);
  angular.module('procalizeApp.directives', ['d3']);


}());
