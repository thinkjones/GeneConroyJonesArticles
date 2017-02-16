'use strict';

var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider) {

    var landingState = {
        name: 'landing',
        url: '/',
        templateUrl: 'landing.html',
        controller: 'LandingCtrl'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'home/about.html',
        controller: 'AboutCtrl'
    };

    $stateProvider.state(landingState);
    $stateProvider.state(aboutState);
});

module.exports = {
    myApp: myApp
};
