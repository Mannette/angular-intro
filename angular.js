var myApp = angular.module('myApp', []);

myApp.controller('hogwarts', ['$scope', function($scope) {
  $scope.names = [
    'Harry',
    'Ron',
    'Hermione',
    'Sirius',
    'Hedwig',
    'Tonks'
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

myApp.controller('numbers', ['$scope', function($scope) {
  $scope.nums = [
    1,
    1,
    2,
    5,
    6,
    9,
    9,
    9
  ];
}]);

myApp.controller('person', ['$scope', function($scope) {
  $scope.students = [
    {name: 'Bae', age: 20},
    {name: 'John', age: 27},
    {name: 'Greg', age: 25},
    {name: 'Fred', age: 23}
  ];
}]);
