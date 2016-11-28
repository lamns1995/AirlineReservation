angular.module("app").factory("httpMethodsService", function ($q, $http) {
    return {
        Get: function (url) {
            var defer = $q.defer();
            $http.get(url, {cache:false})
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (response) {
                    defer.resolve(response);
                });          
            return defer.promise;
        },

        Post: function (url, postData) {
            var defer = $q.defer();
            $http.post(url, postData)
                .success(function (data) {
                    defer.resolve(data);
                })
				.error(function (response) {
				    defer.resolve(response);
				});            
            return defer.promise;
        },

        Delete: function (url, deleteData) {
            var defer = $q.defer();
            $http.delete(url, deleteData)
                .success(function (data) {
                    defer.resolve(data);
                })
				.error(function (response) {
				    defer.resolve(response);
				});

            return defer.promise;
        },

        Put: function (url, putData) {
            var defer = $q.defer();
            $http.put(url, putData)
                .success(function (data) {
                    defer.resolve(data);
                })
				.error(function (response) {
				    defer.resolve(response);
				});
            return defer.promise;
        },

    };
});
