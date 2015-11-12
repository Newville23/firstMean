
var app = angular.module('david', []);

function mainController($scope, $http){
  $scope.formData = {};

  $http.get('/api/todos')
    .success(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data );
    });

    $scope.createTodo = function(){
        $http.post('/api/todos', $scope.formData)
          .success(function(data){
            $scope.formData = {};
            console.log(data);
          })
          .error(function(data){
            console.log('Error: ' + data);
          });
    };
    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };




}
