var app = angular.module("app", []);

app.controller("AppCtrl", function ($scope, $rootScope) {
    $rootScope.foo = 100;
})

app.directive("dontMindMe", function () {
    return {
        restrict: "E",
        controller: function ($rootScope) {
            $rootScope.foo = Math.random() * 100;
        }
    }
})