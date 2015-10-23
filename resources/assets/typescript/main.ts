/**
 * Created by XebiaLeenlaptop on 05/10/15.
 */
/// <reference path="../../../typings/tsd.d.ts" />
var app = angular.module('tenseconds',['ngMaterial']);

class MainController {
    public welcomeMessage : string;

    constructor(){
        this.welcomeMessage = 'Hello World from client';
    }
}


app.controller('MainCtrl', MainController);
