var app = angular.module("app", []);

app.controller("AppCtrl", function ($scope) {
    //event example
    $scope.$on("fire", function () {
        alert("fire!")
    })

    //callback example
    $scope.alertFire = function () {
        alert("fire!");
    }
})

app.directive("eventExample", function () {
    return {
        restrict: "E",
        link: function (scope, element) {
            element.bind("click", function () {
                scope.$broadcast("fire");
            })
        }
    }
})

app.directive("callbackExample", function () {
    return {
        restrict: "E",
        scope: {
            onFire: "&"
        },
        link: function (scope, element) {
            element.bind("click", function () {
                scope.onFire();
            })
        }
    }
})