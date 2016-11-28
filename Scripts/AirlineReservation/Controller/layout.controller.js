angular.module('app').controller('layout.controller', function ($scope, $http, $location) {
    $scope.menuClass = function (page) {
        var values = $location.absUrl();
        var valuesSplit = values.split("/");
        value1 = valuesSplit[3];
        value2 = valuesSplit[4];
        var current = "/" + value1 + "/" + value2;
        //var current = $location.absUrl().substring(22);
        return page === current ? "active" : "";
    };
});