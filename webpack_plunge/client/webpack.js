require('../node_modules/angular/angular.js')
require('../node_modules/angular-ui-router/release/angular-ui-router.js')
require("file-loader?name=index.html!./index.html");
require("file-loader?name=landing.html!./app/landing.html");
require("file-loader?name=home/about.html!./app/home/about.html");

require('expose-loader?entry!./app/app.js');

// Old method include each file.
// require('imports-loader?myApp=>entry.myApp!./app/landing.js');
// require('imports-loader?myApp=>entry.myApp!./app/home/about.js');

// New method include all files in a directory.
function importAll (r) {
    r.keys().forEach(function(file) {
        if (!file.includes('app.js')) {
            r(file);
        }
    });
}
importAll(require.context("imports-loader?myApp=>entry.myApp!./app/", true, /.*\.js/));

