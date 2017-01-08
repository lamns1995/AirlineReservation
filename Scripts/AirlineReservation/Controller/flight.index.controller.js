angular.module('app').controller('flight.index.controller', function ($scope, $http, flightService, httpMethodsService) {
    $scope.init = function () {
        $scope.search();
    };
    $scope.search = function () {
        httpMethodsService.Get("/api/Admin/GetListFlight").then(function (response) {
            if (response.Success) {
                $scope.listItems = response.Data;
            } else {
                alert('Error');
            }
        });
    };
    $scope.logout = function () {

        sessionStorage.removeItem('accessToken');
        window.location.href = '/Login/SecurityInfo';
    };

    $scope.delete = function (v) {
        var value = {
            Id: v.ID
        }
        httpMethodsService.Post("/api/Student/Delete", value).then(function (response) {
            if (response.Success) {
                alert('Delete Success!');
                $scope.search();
            } else {
                alert('Error!')
            }
        });
    };

    $scope.edit = function (v) {
        location.href = "/Flight/details/" + v.FlightCode;
    }

    $scope.add = function () {
        location.href = "/Flight/details/00000000-0000-0000-0000-000000000000";
    };
});