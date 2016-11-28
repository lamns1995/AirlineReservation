
angular.module('app').controller('flightdetails.index.controller', function ($scope, $http, httpMethodsService) {

    $scope.Init = function () {
        $scope.GetListFlightDetails();
    };

    $scope.GetListFlightDetails = function () {
        httpMethodsService.Post("/api/FlightDetails/GetListFlightDetails").then(function (response) {
            if (response.Success) {
                $scope.flightDetailsList = response.Data;
            }
        });
    };

});