﻿angular.module("app").service("flightService", function ($http) {
    this.get = function () {

        var accesstoken = sessionStorage.getItem('accessToken');

        var authHeaders = {};
        if (accesstoken) {
            authHeaders.Authorization = 'Bearer ' + accesstoken;
        }

        var response = $http({
            url: "/api/Admin/GetListFlight",
            method: "GET",
            headers: authHeaders
        });
        return response;
    };
});
