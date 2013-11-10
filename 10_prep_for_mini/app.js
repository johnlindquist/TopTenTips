var app = angular.module("app", [])

app.value("One", 1)
app.value("Two", 2)
app.value("Three", 3)


app.controller("AppCtrl", ["$scope", "One", "Two", "Three", function ($scope, One, Two, Three) {

}])

//vs.

app.controller("AppCtrl", function ($scope, One, Two, Three) {

})
