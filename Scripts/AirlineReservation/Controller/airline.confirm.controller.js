
angular.module('app').controller('airline.confirm.controller', function ($scope, $http, httpMethodsService) {

    $scope.Init = function () {
        $scope.Confirm();
    };

    var flightReq = {
        flyingFrom: _flyingFrom,
        flyingTo: _flyingTo,
        flyingClass: _flyingClass,
        flyingCost: _flyingCost,
        flyingDate: _flyingDate,
    };

    $scope.Confirm = function () {
        httpMethodsService.Post("/api/Flight/Confirm", flightReq).then(function (response) {
            if (response.Success) {
                $scope.Model = response.Data;
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
        };
        httpMethodsService.Post("/api/FlightDetails/AddFlightDetails", flightReq).then(function (response) {
            if (response.Success) {
                $scope.flightDetails = response.Data;
                location.href = "/airline/passenger/" + $scope.flightDetails;
            }
        });
    };
});