
angular.module('app').controller('airline.details.controller', function ($scope, $http, httpMethodsService) {

    $scope.Init = function () {
        $scope.Search();
    };

    var flightReq = {
        flyingFrom: _flyingFrom,
        flyingTo: _flyingTo,
        flyingClass: _flyingClass,
        flyingCost: _flyingCost,
        flyingDate: _flyingDate,
    };

    $scope.Search = function () {
        httpMethodsService.Post("/api/Flight/Search", flightReq).then(function (response) {
            if (response.Success) {
                $scope.flightList = response.Data;
                if ($scope.flightList.length == 0) {
                    alert('No Flights From ' + flightReq.flyingFrom + ' To ' + flightReq.flyingTo + ' In ' + flightReq.flyingDate);
                    location.href = "/airline/index/";
                }
            }
        });
    };

    $scope.Confirm = function () {
        location.href = "/airline/confirm/" + flightReq.flyingFrom + "/" + flightReq.flyingTo + "/" + moment(flightReq.flyingDate).format("MMDDYYYY") + "/" + flightReq.flyingClass + "/" + flightReq.flyingCost;
    }
});