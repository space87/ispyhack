// export default ngModule => {
//
//     require('./caseList.scss');
//
//     ngModule.controller('UploadController',[function($http){
//
//         this.title = "Case llist"
//
//         $http.get('https://sheltered-headland-81365.herokuapp.com/api/cases')
//         .then(function(res) {
//           console.log(res)
//         })
//         .catch(function(err) {
//           console.log('err', err)
//         })
//
//     }])
// };
 require('./caseDetails.scss');

 // cases.$inject = ['$http'];

export default class caseDetails {
  constructor($http, $stateParams, $scope) {
    this.title = 'Case Detail'

    var self = this;

    self.textSuccess = false;

    this.detail = {};
    this.tempSighting = {
      number:null,
      lat:null,
      long:null,
      dateAdded:null,
      confidence:null
    }

    $http.get('http://https://sheltered-headland-81365.herokuapp.com/api/cases/' + $stateParams.id)
    .then(function(res) {
      console.log(res)
      self.detail = res.data;
    })
    .catch(function(err) {
      console.log('err', err)
    })

    this.openModal = function() {
        document.querySelector('.sightingModal').style.transform = 'translate3d(0,50%,0)';
    }

    this.closeModal = function() {

      document.querySelector('.sightingModal').style.transform = 'translate3d(0,-200%,0)';
      self.tempSighting = {
        number:null,
        lat:0,
        long:-10,
        dateAdded:null,
        confidence:null
      }
    }

    this.openPhotoModal = function() {
      document.querySelector('.photoModal').style.transform = 'translate3d(0,50%,0)';
    }



    this.viewSighting = function(number) {
      console.log(number)


        self.tempSighting = {
          number: number,
          lat: self.detail.matchedImages[number].lat,
          long: self.detail.matchedImages[number].long,
          dateAdded: self.detail.matchedImages[number].dateAdded,
          confidence: Math.random(Math.floor() * 6)
        }


    self.openModal();




    }

    this.approve = function() {



      $http.post('http://https://sheltered-headland-81365.herokuapp.com/api/textFamily', {
        forename: self.detail.forename,
        surname: self.detail.surname,
        mobileNumber: self.detail.reporteeMobileNumber
      })
      .then(function(res) {

        self.closeModal();
        setTimeout(function() {
          document.querySelector('.alert-success').style.display = 'block';

          setTimeout(function() {
            document.querySelector('.alert-success').style.display = 'none';
          }, 2000)


        }, 800)





      })
      .catch(function(err) {
        console.log(err)
      })
    }

    $scope.uploadFile = function(files) {

      console.log(files)
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post('https://sheltered-headland-81365.herokuapp.com/api/cases/581575b4e123d111470f830a/images', fd, {
        withCredentials: true,
        // headers: {'Content-Type': '' },
        transformRequest: angular.identity
    }).success( console.log('yay') ).error( console.log('oo') );

};

    this.uploadPhoto = function() {

      $http.post('https://sheltered-headland-81365.herokuapp.com/api/cases/5814baf0b6b7ae1cbc1b4aab/images', data)
      .then(function(res) {

      })
      console.log('click')
    }

  }




}
