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

myApp.controller('camera', ['$scope', function($scope) {
  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ];
}]);
