
var davidTodo = angular.module('davidTodo', []);

function mainController($scope,$http){
  $scope.formData = {};

  $http.get('/api/todos')
    .succes(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data){
      console.console.log('Error: ' + data );
    });

    $scope.CreateTodo = function(){
        $http.post('/api/todos', $scope.formData)
          .succes(function(data){
            $scope.formData = {}
            console.log(data);
          })
          .error(function(data){
            console.log('Error: ' + data)
          });
    };




}
