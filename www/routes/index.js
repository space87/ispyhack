export default ngModule => {


    // ngModule.controller('AppController', ['$router', function ($router) {
    //
    //     this.application = 'Erin Peterson Fund'
    //
    //     $router.config([
    //         {path: '/', components: {'main':'home'} },
    //         {path: '/register', components: {'main':'component1'} },
    //     ]);
    //
    //
    // }]);

    ngModule.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {


    var home = {
      name: 'home',
      url: '/',
      templateUrl: '../components/home/home.html',
      controller:'HomeController'

    }



    var login = {
      name: 'login',
      url: '/login',
      templateUrl: '../components/login/login.html',
      controller:'LoginController'
    }

    var register = {
      name: 'register',
      url: '/register',
      template: '<div sp-registration-form post-login-state="main"></div>',
    }



    var cases = {
      name: 'cases',
      url: '/cases',
      templateUrl:'../components/caseList/caseList.html',
      controller: 'cases',
      controllerAs: 'model',
      sp: {
    authenticate: true
  }
    }

    var cases2 = {
      name: 'cases2',
      url: '/cases/',
      templateUrl:'../components/caseList/caseList.html',
      controller: 'cases',
      controllerAs: 'model',
      sp: {
    authenticate: true
  }
    }

    var detail = {
      name:'detail',
      url: '/cases/:id',
      templateUrl:'../components/caseDetails/caseDetails.html',
      controller: 'details',
      controllerAs: 'model',
      sp: {
    authenticate: true
  }
    }

    // var register = {
    //   name: 'register',
    //   url: '/register',
    //   templateUrl: '../components/home/home.html',
    //   controller:'<h1>register</h1>'
    // }

    $stateProvider.state(home);

    $stateProvider.state(login);
    $stateProvider.state(register);

    $stateProvider.state(cases);
    $stateProvider.state(cases2);
    $stateProvider.state(detail);

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');


    })


};
