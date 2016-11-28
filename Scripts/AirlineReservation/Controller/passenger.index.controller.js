
angular.module('app').controller('passenger.index.controller', function ($scope, $http, httpMethodsService) {

    $scope.Init = function () {
        $scope.GetListPassenger();
    };

    $scope.GetListPassenger = function () {
        httpMethodsService.Post("/api/Passenger/GetListPassenger").then(function (response) {
            if (response.Success) {
                $scope.passengerList = response.Data;
            }
        });
    };

});