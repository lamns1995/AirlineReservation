
angular.module('app').controller('airline.detailsreturn.controller', function ($scope, $http, httpMethodsService) {

    $scope.Init = function () {
        $scope.Search();
    };

    var flightReq = {
        flyingFrom: _flyingFrom,
        flyingTo: _flyingTo,
        flyingClass: _flyingClass,
        flyingCost: _flyingCost,
        flyingDate: _flyingDate,
        flyingDateReturn: _flyingDateReturn
    };

    $scope.Search = function () {
        httpMethodsService.Post("/api/Flight/Search", flightReq).then(function (response) {
            if (response.Success) {
                $scope.flightListOneWay = response.Data;

                if ($scope.flightListOneWay.length == 0) {
                    alert('No Flights From ' + flightReq.flyingFrom + ' To ' + flightReq.flyingTo + ' For ' + flightReq.flyingClass + ' ' + flightReq.flyingCost + ' Class' + ' In ' + flightReq.flyingDate);
                    location.href = "/airline/indexreturn/";
                }
                $scope.flightListReturn = $scope.SearchReturn();
            }
        });
        
    };

    $scope.SearchReturn = function () {
        httpMethodsService.Post("/api/Flight/SearchReturn", flightReq).then(function (response) {
            if (response.Success) {
                $scope.flightListReturn = response.Data;

                if ($scope.flightListReturn.length == 0) {
                    alert('No Flights Return From ' + flightReq.flyingTo + ' To ' + flightReq.flyingFrom + ' For ' + flightReq.flyingClass + ' ' + flightReq.flyingCost + ' Class' + ' In ' + flightReq.flyingDateReturn);
                    location.href = "/airline/indexreturn/";
                }
            }
        });
    };

    $scope.Confirm = function (i) {
        location.href = "/airline/confirmreturnstep1/" + i.From + "/" + i.To + "/" + moment(i.Date).format("MMDDYYYY") + "/" + i.Class + "/" + i.Cost + "/" + moment(flightReq.flyingDateReturn).format("MMDDYYYY") + "/" + i.FlightCode;
    }
});