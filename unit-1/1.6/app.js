var app = angular.module('firstApp', []);

app.controller('MyFirstController', function($scope) {
  $scope.name = 'Severus Snape';
});

app.controller('ExercisesController', function($scope) {
  $scope.favColor = 'blue';
  $scope.secondsInACentury = 100 * 365 * 24 * 60 * 60;

  var today = new Date();
  $scope.rightNow = today.toLocaleDateString();
});

app.controller('madLibs', function($scope) {
  $scope.libs = function() {
    $scope.name = document.getElementById('boyName').value;
    $scope.adjective = document.getElementById('adjective').value;
    $scope.firstNoun = document.getElementById('firstNoun').value;
    $scope.secondNoun = document.getElementById('secondNoun').value;
    $scope.insect = document.getElementById('insect').value;
    $scope.verb = document.getElementById('verb').value;
  };
});
