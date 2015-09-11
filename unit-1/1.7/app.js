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

app.controller('pingPong', function($scope) {
  $scope.player1 = 0;
  $scope.player2 = 0;
  $scope.playerOne = function() {
    $scope.player1 += 1;
  };
  $scope.playerTwo = function() {
    $scope.player2 += 1;
  };
  $scope.reset = function() {
    $scope.player1 = 0;
    $scope.player2 = 0;
  };
});
