import caseList from './components/caseList/caseList.js';
import details from './components/caseDetails/caseDetails.js';
(function(){

    const bootstrap = require('bootstrap-webpack');
    const angular = require('angular');
    const router = require('angular-new-router');
    const routers = require('angular-ui-router');
    const ngmap = require('ngmap');
    // var caseList = require('./components/caseList/caseList.js');



    const stormpath = require('stormpath-sdk-angularjs');


    const ngModule = angular.module('app',[
        'ngNewRouter', 'ui.router','stormpath', 'stormpath.templates', 'ngMap'
    ]);


    ngModule.run(function($stormpath) {
      $stormpath.uiRouter({
        loginState: 'home',
        defaultPostLoginState: 'about'
      });
    });

    ngModule.controller('cases', caseList)
    ngModule.controller('details', details)




    require ('./css/app.scss');

    require('./components/nav/nav.js')(ngModule);
    require('./components/home/home.js')(ngModule);
    require('./components/login/login.js')(ngModule);

    require('./components/upload/upload.js')(ngModule);


    require('./routes')(ngModule);


})();
