
angular.module('app').controller('booking.payment.controller', function ($scope, $http, httpMethodsService) {

    $scope.Init = function () {
        $scope.Confirm();
    };

    var bookingReq = {BookingCode: _flyingFrom};
    $scope.Confirm = function () {
        httpMethodsService.Post("/api/Booking/ConfirmBooking", bookingReq).then(function (response) {
            if (response.Success) {
                $scope.Model = response.Data;
            }
        });
    };

    $scope.Payment = function () {
        httpMethodsService.Post("/api/Booking/PaymentBooking", bookingReq).then(function (response) {
            if (response.Success) {
                location.href = "/booking/index/";
            }
        });
    }
});