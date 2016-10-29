export default ngModule => {

    require ('./home.scss');

    ngModule.controller('HomeController',[function(){
            this.name= 'Justin';
        }])
};
