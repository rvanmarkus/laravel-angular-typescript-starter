/**
 * Created by XebiaLeenlaptop on 05/10/15.
 */
/// <reference path="../../../typings/tsd.d.ts" />
var app = angular.module('tenseconds', ['ngMaterial']);
var MainController = (function () {
    function MainController() {
        this.welcomeMessage = 'Hello World from client';
    }
    return MainController;
})();
app.controller('MainCtrl', MainController);
