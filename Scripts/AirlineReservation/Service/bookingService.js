angular.module('app').factory("bookingService", function ($http) {
    var listStatus =
       [
            { Value: 0, Text: "UNPAID" },
            { Value: 1, Text: "PAID" }
       ];
    var bookingStatus = {
        UNPAID: 0,
        PAID: 1,
    };
    return {
        GetListStatus: function () {
            return listStatus;
        },
    };

});
