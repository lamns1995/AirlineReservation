angular.module('app').controller('airline.index.controller', function ($scope, $http, httpMethodsService) {

    $scope.listFlyingFrom = [];
    $scope.listFlyingTo = [];
    //$scope.listFlyingClass = [];
    //$scope.listFlyingCost = [];

    $scope.flyingDate = new Date();

    $scope.SelectedFlyingFrom = null;
    $scope.SelectedFlyingTo = null;
    $scope.SelectedFlyingClass = null;
    $scope.SelectedFlyingCost = null;


    $scope.apiUrls = {
        getFlyingFrom: "/api/Flight/GetFlyingFrom",
        getFlyingTo: "/api/Flight/GetFlyingTo",
        getFlyingClass: "/api/Flight/GetFlyingClass",
        getFlyingCost: "/api/Flight/GetFlyingCost",
        getFlight: "/api/Flight/Search",
    };

    $scope.GetFlyingClass = function () {
        httpMethodsService.Get("/api/Flight/GetFlyingClass").then(function (response) {
            if (response.Success) {
                $scope.listFlyingClass = response.Data;
                $scope.listFlyingCost = $scope.GetFlyingCost();
            }
        });
    };

    $scope.GetFlyingCost = function () {
        httpMethodsService.Get("/api/Flight/GetFlyingCost").then(function (response) {
            if (response.Success) {
                $scope.listFlyingCost = response.Data;
            }
        });
    };

    $scope.Init = function () {
        $scope.listFlyingFrom = httpMethodsService.Get($scope.apiUrls.getFlyingFrom).then(function (response) {
            $scope.listFlyingFrom = response.Data;
            $scope.listFlyingClass = $scope.GetFlyingClass();
        });
        var url;
        if ($scope.SelectedFlyingTo != null) {
            url = $scope.apiUrls.getFlyingTo + "?flyingFrom=" + $scope.SelectedFlyingFrom.From;
            $scope.listFlyingTo = httpMethodsService.Get(url).then(function (response) {
                $scope.listFlyingTo = response.Data;
                //$scope.Search();
            });
        }
    };

    $scope.FlyingFromChange = function () {
        var url = $scope.apiUrls.getFlyingTo + "?flyingFrom=" + $scope.SelectedFlyingFrom.From;
        $scope.listFlyingTo = httpMethodsService.Get(url).then(function (response) {
            $scope.listFlyingTo = response.Data;
            $scope.SelectedFlyingTo = null;
        });
    };

    $scope.Search = function () {
        if ($scope.SelectedFlyingFrom == null || $scope.SelectedFlyingTo == null || $scope.flyingDate == null || $scope.SelectedFlyingClass == null || $scope.SelectedFlyingCost == null)
            alert("Please select full value to search!");
        location.href = "/airline/details/" + $scope.SelectedFlyingFrom.From
            + "/" + $scope.SelectedFlyingTo.To
            + "/" + moment($scope.flyingDate).format("DDMMYYYY")
            + "/" + $scope.SelectedFlyingClass.Class
            + "/" + $scope.SelectedFlyingCost.Cost;
    }
});