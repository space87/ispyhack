export default ngModule => {

    require('./upload.scss');

    ngModule.controller('UploadController',[function(){

        this.title = "Upload a image"

    }])
};
