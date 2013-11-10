var app = angular.module("app", ["ngRoute"]);

app.constant("CONFIG", {
    ENV: "dev"
})

app.config(function (CONFIG, $routeProvider) {
    $routeProvider.when("/", {
        templateUrl: CONFIG.ENV + "/template.html"
    })
})
