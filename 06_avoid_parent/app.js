var app = angular.module("app", []);

app.controller("FirstCtrl", function ($scope) {
    $scope.someValue = "should really be set here";
})

app.controller("SecondCtrl", function ($scope) {
    //fail
})

app.directive("avoidParent", function () {
    return {
        restrict: "E",
        scope: {},
        link: function (scope) {
            console.log(scope.$parent.someValue);
        }
    }
})
