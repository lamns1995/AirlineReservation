angular.module("app").service("loginservice", function ($http) {
    //return {
    //    login: function (userlogin) {
    //        var resp = $http({
    //            url: "/api/Account/Register",
    //            method: "POST",
    //            data: userInfo,
    //        });
    //        return resp;
    //    },
    //    register: function (userlogin) {
    //        var resp = $http({
    //            url: "/api/Account/Register",
    //            method: "POST",
    //            data: userInfo,
    //        });
    //        return resp;
    //    },      

    //};

    this.register = function (userInfo) {
        var resp = $http({
            url: "/api/Account/Register",
            method: "POST",
            data: userInfo,
        });
        return resp;
    };

    this.login = function (userlogin) {

        var resp = $http({
            url: "/TOKEN",
            method: "POST",
            data: $.param({ grant_type: 'password', username: userlogin.username, password: userlogin.password }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return resp;
    };
});
