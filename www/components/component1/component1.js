export default ngModule => {

    require ('./component1.scss');

    ngModule.controller('Component1Controller',[function(){

        this.title = "Component 1 ViewPort"

    }])
};
