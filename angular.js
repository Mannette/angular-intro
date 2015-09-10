var myApp = angular.module('myApp', []);

myApp.controller('hogwarts', ['$scope', function($scope) {
  $scope.names = [
    "Harry",
    "Ron",
    "Hermione",
    "Sirius",
    "Hedwig",
    "Tonks"
  ];

}]);

myApp.controller('symbols', ['$scope', function($scope) {
  $scope.symbols = [
    '\u2660',
    '\u2663',
    '\u2665',
    '\u25C6'
  ];
}]);
