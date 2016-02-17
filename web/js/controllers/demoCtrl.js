(function () {
  'use strict';

  angular.module('procalizeApp.controllers')
    .controller('MainCtrl', ['$scope', function($scope){
      this.data = [
        {name: "Bar1", number:98},
        {name: "Bar2", number:96},
        {name: "Bar3", number: 48}
      ];
      $scope.d3OnClick = function(item){
        alert(item.name);
      };
    }]);

}());
