
angular.module('app').controller('booking.index.controller', function ($scope, $http, bookingService, httpMethodsService) {

    $scope.Init = function () {
        $scope.GetListBooking();
    };

    $scope.GetListBooking = function () {
        httpMethodsService.Post("/api/Booking/GetListBooking").then(function (response) {
            if (response.Success) {
                $scope.bookingtList = response.Data;
            }
        });
    };

    $scope.Confirm = function (i) {
        location.href = "/booking/payment/" + i.BookingCode;
    }
});