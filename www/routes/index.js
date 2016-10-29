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

    ngModule.config(function($stateProvider) {
        console.log('oss')
        console.log('jsjsjs')
    var home = {
      name: 'hello',
      url: '/',
      templateUrl: '../components/home/home.html'

    }

    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: '../components/component1/component1.html'
    }

    var login = {
      name: 'login',
      url: '/login',
      templateUrl: '../components/home/home.html',
      controller:'../components/home/home.js'
    }

    var register = {
      name: 'register',
      url: '/register',
      template: '<div sp-registration-form post-login-state="main"></div>',

    }

    // var register = {
    //   name: 'register',
    //   url: '/register',
    //   templateUrl: '../components/home/home.html',
    //   controller:'<h1>register</h1>'
    // }

    $stateProvider.state(home);
    $stateProvider.state(aboutState);
    $stateProvider.state(login);
    $stateProvider.state(register);

    })


};
