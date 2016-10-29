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

    $http.get('https://sheltered-headland-81365.herokuapp.com/api/cases')
    .then(function(res) {
      console.log(res)
    })
    .catch(function(err) {
              console.log('err', err)
            })
  }


}
