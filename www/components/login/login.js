export default ngModule => {

    require ('./login.scss');

    ngModule.controller('LoginController',[function(){
            this.name= 'Justin';
        }])
};
