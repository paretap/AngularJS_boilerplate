/// <reference path="app.js" />

app.controller("fooController", function ($scope) {

    model = $scope;

    model.init = function () {
        alert('You clicked me :)');
    };

    model.YourName = "Pavan";


    model.Users = [
        {
            "userid": 1,
            "name": "Ram"
        },
        {
            "userid": 2,
            "name": "Hari"
        }, {

            "userid": 3,
            "name": "Krishna"
        }];

    model.SelectedUser = $scope.Users[3];
});