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
 require('./caseList.scss');

 // cases.$inject = ['$http'];

export default class cases {
  constructor($http) {
    this.title = 'hi there'
    this.cases = [];
    this.caseInfo = {

    }

    var self = this;

    this.http = $http;

    $http.get('https://sheltered-headland-81365.herokuapp.com/api/cases')
    .then(function(res) {
      console.log(res)
      res.data.map(function(item) {
        self.cases.push(item);
      })
    })
    .catch(function(err) {
      console.log('err', err)
    })

    this.openModal = function() {
      document.querySelector('.modal').style.display = 'block';
    }

    this.closeModal = function() {
      // animate this ?
      document.querySelector('.modal').style.display = 'none';
    }

    this.createCase = function(form) {
      console.log('click')
      console.log(form)
      var data = {
        "reference" : form.reference,
        "surname" : form.surname,
        "forename":form.forename,
        "gender": form.gender,
        "birthYear": new Date(form.dob).getTime(),
        "status":form.status,
        "category": form.category,
        "accomodation":form.accomodation,
        "borough":form.borough,
        "area":form.area,
        "xCord":'029201',
        "yCord":'9292020',
        "dateMissing": new Date(form.dateMissing).getTime(),
        "recordCreated": new Date().getTime(),
        "added": null
      }

      $http.post('https://sheltered-headland-81365.herokuapp.com/api/cases', data)
      .then(function(res) {
        console.log(res)
        if(res.status < 400) {
          self.closeModal();
        }
      })
      .catch(function(err) {
        console.log('there was a error', err)
      })
    }
  }




}
