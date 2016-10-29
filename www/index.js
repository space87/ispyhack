(function(){

    const bootstrap = require('bootstrap-webpack');
    const angular = require('angular');
    const router = require('angular-new-router');
    const routers = require('angular-ui-router');

    const stormpath = require('stormpath-sdk-angularjs');


    const ngModule = angular.module('app',[
        'ngNewRouter', 'ui.router','stormpath', 'stormpath.templates'
    ]);


    ngModule.run(function($stormpath) {
      $stormpath.uiRouter({
        loginState: 'about',
        defaultPostLoginState: 'about'
      });
    });

    ngModule.config(function($urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
    })


    require ('./css/app.scss');

    require('./components/nav/nav.js')(ngModule);
    require('./components/home/home.js')(ngModule);
    require('./components/component1/component1.js')(ngModule);
    require('./components/component2/component2.js')(ngModule);
    require('./directives')(ngModule);
    require('./routes')(ngModule);


})();
