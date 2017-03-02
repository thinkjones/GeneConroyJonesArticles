'use strict';

myApp.controller('LandingCtrl', function($http){
    var app = this;
    app.greeting = 'Welcome to the Landing Page';
    $http.get('api/posts').then(function(response){
        app.posts = response;
    });
});
