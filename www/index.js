import caseList from './components/caseList/caseList.js';
(function(){

    const bootstrap = require('bootstrap-webpack');
    const angular = require('angular');
    const router = require('angular-new-router');
    const routers = require('angular-ui-router');
    // var caseList = require('./components/caseList/caseList.js');



    const stormpath = require('stormpath-sdk-angularjs');


    const ngModule = angular.module('app',[
        'ngNewRouter', 'ui.router','stormpath', 'stormpath.templates'
    ]);


    ngModule.run(function($stormpath) {
      $stormpath.uiRouter({
        loginState: 'home',
        defaultPostLoginState: 'about'
      });
    });

    ngModule.controller('cases', caseList)




    require ('./css/app.scss');

    require('./components/nav/nav.js')(ngModule);
    require('./components/home/home.js')(ngModule);
    require('./components/component1/component1.js')(ngModule);
    require('./components/component2/component2.js')(ngModule);
    require('./components/upload/upload.js')(ngModule);

    require('./directives')(ngModule);
    require('./routes')(ngModule);


})();
