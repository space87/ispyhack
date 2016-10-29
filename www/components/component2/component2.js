export default ngModule => {

    require('./component2.scss');

    ngModule.controller('Component2Controller',[function(){

        this.title = "Component 2 ViewPort"

    }])
};
