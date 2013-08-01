/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 7/30/13
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */


DellaWeb.controller('mycontroller', ['$scope', 'angularFire',

    function mycontroller($scope, angularFire) {

        var url = "https://dellas.firebaseio.com/della"; //url of todolist at firebase
        var promise = angularFire(url, $scope, 'todoList'); //promise, last argument is referencing the firebase model


        promise.then(function (todoList) {

        })
    }
]);