angular.module('app').factory("airlineService", function ($http) {
    var listTitleValue =
              [
                   { Value: "Mr", Text: "Mr" },
                   { Value: "Ms", Text: "Ms" },
                   { Value: "Mrs", Text: "Mrs" },
              ];
    return {
        GetListTitleValue: function () {
            return listTitleValue;
        }
    };

});
