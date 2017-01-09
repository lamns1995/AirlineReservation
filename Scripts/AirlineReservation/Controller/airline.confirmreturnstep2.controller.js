
angular.module('app').controller('airline.confirmreturnstep2.controller', function ($scope, $http, httpMethodsService) {

    $scope.Init = function () {
        $scope.ConfirmStep2();

    };

    var flightReq = {
        flyingFrom: _flyingFrom,
        flyingTo: _flyingTo,
        flyingClass: _flyingClass,
        flyingCost: _flyingCost,
        flyingDate: _flyingDate,
        flyingDateReturn: _flyingDateReturn,
        FlightCode: _flightCode
    };

    $scope.ConfirmStep2 = function () {
        httpMethodsService.Post("/api/Flight/ConfirmReturnStep1", flightReq).then(function (response) {
            if (response.Success) {
                $scope.Model = response.Data;
            }
        });
    };

    $scope.SearchReturn = function () {
        httpMethodsService.Post("/api/Flight/SearchReturn", flightReq).then(function (response) {
            if (response.Success) {
                $scope.flightListReturn = response.Data;               
            }
        });
    };

    $scope.AddFlightDetails = function () {
        var flightReq = {
            FlightCode: $scope.Model.FlightCode,
            flyingFrom: $scope.Model.From,
            flyingTo: $scope.Model.To,
            flyingClass: $scope.Model.Class,
            flyingCost: $scope.Model.Cost,
            flyingPrice: $scope.Model.Price,
            flyingDate: moment($scope.Model.Date).format("YYYY-MM-DD"),
            flyingDateReturn: _flyingDateReturn
        };
        httpMethodsService.Post("/api/FlightDetails/AddFlightDetailsReturn", flightReq).then(function (response) {
            if (response.Success) {
                $scope.flightDetails = response.Data;
                location.href = "/airline/passengerreturn/" + $scope.flightDetails;
            }
        });
    };
});