
angular.module('app').controller('airline.passenger.controller', function ($scope, $http, airlineService, httpMethodsService) {

    $scope.listTitleValue = airlineService.GetListTitleValue();
    $scope.Title = "Mr";

    $scope.Init = function () {
        $scope.PassengerDetails();
    };

    var bK = { BookingCode: _bookingCode }

    $scope.PassengerDetails = function () {
        httpMethodsService.Post("/api/Passenger/PassengerDetails", bK).then(function (response) {
            if (response.Success) {
                $scope.Model = response.Data;
            } 
        });
    }

    $scope.AddPassenger = function () {
        var passengerReq = {
            BookingCode: _bookingCode,
            Nickname: $scope.Title,
            Surname: $scope.Model.Surname,
            Name: $scope.Model.Name
        }
        httpMethodsService.Post("/api/Passenger/AddPassenger", passengerReq).then(function (response) {
            if (response.Success) {
                location.href = "/booking/index/";
            }
        });
    };
});