/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 7/30/13
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */


DellaWeb.controller('mycontroller', ['$scope', 'angularFire',

    function mycontroller($scope, angularFire) {

        var url = "https://dellas.firebaseio.com/blogList"; //url at firebase
        var promise = angularFire(url, $scope, 'BlogList'); //promise, last argument is referencing the firebase model


        promise.then(function (BlogList) {


        })
    }
]);