'use strict';

var gulpApp = angular.module('app', []);

gulpApp.controller('MyFirstController', function(){
    var app = this;
    app.greeting = 'Hello There 3';
});
