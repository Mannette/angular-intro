var app = angular.module('myApp', []);

app.controller('randomNum', function($scope) {
  $scope.number = 5;

  $scope.pickRandomNumber = function() {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

app.controller('wordReverse', function($scope) {

  $scope.reverse = function() {
    var text = document.getElementById('input').value;
    var edit = text.split('').reverse().join('');
    $scope.reversed = edit;
  };

});
