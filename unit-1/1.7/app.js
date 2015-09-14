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

  var total = 0;


  $scope.player1 = 0;
  $scope.player2 = 0;
  $scope.playerOne = function() {
    total += 1;
    if ($scope.player1 < 11) {
      $scope.player1 += 1;
    } else {
      $scope.player1 += 0;
    }
    console.log(total);
    return total;
  };
  $scope.playerTwo = function() {
    total += 1;
    if ($scope.player2 < 11) {
      $scope.player2 += 1;
    } else {
      $scope.player2 += 0;
    }
    console.log(total);
    return total;
  };
  $scope.reset = function() {
    $scope.player1 = 0;
    $scope.player2 = 0;
    total = 0;
  };
  $scope.playerOneServing = function() {
    var playerOneServe = [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21];

    for (var i = 0; i < playerOneServe.length; i++) {
      if (playerOneServe[i] === total) {
        return true;
      }
    }
  };
  $scope.playerTwoServing = function() {
    var playerTwoServe = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19];

    for (var i = 0; i < playerTwoServe.length; i++) {
      if (playerTwoServe[i] === total) {
        return true;
      }
    }
  };
  $scope.server = 'Serving';
});
