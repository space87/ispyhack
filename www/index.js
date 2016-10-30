import caseList from './components/caseList/caseList.js';
import details from './components/caseDetails/caseDetails.js';
(function(){

    const bootstrap = require('bootstrap-webpack');
    const angular = require('angular');
    const router = require('angular-new-router');
    const routers = require('angular-ui-router');
    const ngmap = require('ngmap');




    const stormpath = require('stormpath-sdk-angularjs');


    const ngModule = angular.module('app',[
        'ngNewRouter', 'ui.router','stormpath', 'stormpath.templates', 'ngMap'
    ]);

    ngModule.controller('cases', caseList)
    ngModule.controller('details', details)








    require ('./css/app.scss');


    require('./components/home/home.js')(ngModule);
    require('./components/login/login.js')(ngModule);

    require('./components/upload/upload.js')(ngModule);


    require('./routes')(ngModule);

    ngModule.run(function($stormpath) {
      $stormpath.uiRouter({
        loginState: 'login',
        defaultPostLoginState: 'cases'
      });
    });


})();
